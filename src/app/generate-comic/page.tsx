"use client";

import { Suspense, useEffect, useRef, useState, useTransition } from "react";
import { useLocalStorage } from "usehooks-ts";
import { cn } from "@/lib/generate-comic/cn";
import { fonts } from "@/lib/generate-comic/fonts";
import { joinWords } from "@/lib/generate-comic/joinWords";
import { useStore } from "@/store/useComic";
import { sleep } from "@/lib/generate-comic/sleep";
import { localStorageKeys } from "@/lib/generate-comic/settings-dialog/localStorageKeys";
import { defaultSettings } from "@/lib/generate-comic/settings-dialog/defaultSettings";
import { getStoryContinuation } from "@/lib/generate-comic/queries/getStoryContinuation";
import { Page } from "@/components/generate-comic/Page";
import { TopMenu } from "@/components/generate-comic/TopMenu";
import { useDynamicConfig } from "@/lib/generate-comic/useDynamicConfig";
import { Button } from "@/components/generate-comic/UI/button";
import { Zoom } from "@/components/generate-comic/Zoom";
import { FaGear } from "react-icons/fa6";
import { useSpeechSynthesis } from "@/utils/texttospeech/TextToSpeech";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { geminiComicStory } from "@/utils/chat/geminiComicStory";

export default function Main() {
  const [speaking, setSpeaking] = useState(false);
  const { speak } = useSpeechSynthesis(speaking, setSpeaking);
  const [_isPending, startTransition] = useTransition();

  const { config, isConfigReady } = useDynamicConfig();
  const isGeneratingStory = useStore((s) => s.isGeneratingStory);
  const setGeneratingStory = useStore((s) => s.setGeneratingStory);

  const font = useStore((s) => s.font);
  const preset = useStore((s) => s.preset);
  const prompt = useStore((s) => s.prompt);

  const currentNbPages = useStore((s) => s.currentNbPages);
  const maxNbPages = useStore((s) => s.maxNbPages);
  const previousNbPanels = useStore((s) => s.previousNbPanels);
  const currentNbPanels = useStore((s) => s.currentNbPanels);
  const maxNbPanels = useStore((s) => s.maxNbPanels);

  const setCurrentNbPanelsPerPage = useStore(
    (s) => s.setCurrentNbPanelsPerPage
  );
  const setMaxNbPanelsPerPage = useStore((s) => s.setMaxNbPanelsPerPage);
  const setCurrentNbPages = useStore((s) => s.setCurrentNbPages);
  const setMaxNbPages = useStore((s) => s.setMaxNbPages);

  const panels = useStore((s) => s.panels);
  const setPanels = useStore((s) => s.setPanels);

  // do we need those?
  const renderedScenes = useStore((s) => s.renderedScenes);
  const captions = useStore((s) => s.captions);

  const setCaptions = useStore((s) => s.setCaptions);

  const zoomLevel = useStore((s) => s.zoomLevel);

  const [waitABitMore, setWaitABitMore] = useState(false);

  const [userDefinedMaxNumberOfPages, setUserDefinedMaxNumberOfPages] =
    useLocalStorage<number>(
      localStorageKeys.userDefinedMaxNumberOfPages,
      defaultSettings.userDefinedMaxNumberOfPages
    );

  const numberOfPanels = Object.keys(panels).length;
  const panelGenerationStatus = useStore(
    (state) => state.panelGenerationStatus
  );
  const allStatus = Object.values(panelGenerationStatus);
  const numberOfPendingGenerations = allStatus.reduce(
    (acc, s) => acc + (s ? 1 : 0),
    0
  );

  const hasAtLeastOnePage = numberOfPanels > 0;

  const hasNoPendingGeneration = numberOfPendingGenerations === 0;

  const hasStillMorePagesToGenerate = currentNbPages < maxNbPages;
  const [isFullStory, setIsFullStory] = useState(false);

  const showNextPageButton =
    hasAtLeastOnePage && hasNoPendingGeneration && hasStillMorePagesToGenerate;
  const [story, setStory] = useState<string>("");
  const [storyCation, setStoryCaption] = useState<string>("");
  /*
  console.log("<Main>: " + JSON.stringify({
    currentNbPages,
    hasAtLeastOnePage,
    numberOfPendingGenerations,
    hasNoPendingGeneration,
    hasStillMorePagesToGenerate,
    showNextPageButton
  }, null, 2))
  */

  useEffect(() => {
    if (maxNbPages !== userDefinedMaxNumberOfPages) {
      setMaxNbPages(userDefinedMaxNumberOfPages);
    }
  }, [maxNbPages, userDefinedMaxNumberOfPages]);

  const ref = useRef({
    existingPanels: [] as GeneratedPanel[],
    newPanelsPrompts: [] as string[],
    newCaptions: [] as string[],
    prompt: "",
    preset: "",
  });

  useEffect(() => {
    if (isConfigReady) {
      // note: this has very low impact at the moment as we are always using the value 4
      // however I would like to progressively evolve the code to make it dynamic
      setCurrentNbPanelsPerPage(config.nbPanelsPerPage);
      setMaxNbPanelsPerPage(config.nbPanelsPerPage);
    }
  }, [JSON.stringify(config), isConfigReady]);

  // react to prompt changes
  useEffect(() => {
    // console.log(`main.tsx: asked to re-generate!!`)
    if (!prompt) {
      return;
    }

    // if the prompt or preset changed, we clear the cache
    // this part is important, otherwise when trying to change the prompt
    // we wouldn't still have remnants of the previous comic
    // in the data sent to the LLM (also the page cursor would be wrong)
    if (prompt !== ref.current.prompt || preset?.label !== ref.current.preset) {
      // console.log("overwriting ref.current!")
      ref.current = {
        existingPanels: [],
        newPanelsPrompts: [],
        newCaptions: [],
        prompt,
        preset: preset?.label || "",
      };
    }

    startTransition(async () => {
      setWaitABitMore(false);
      setGeneratingStory(true);

      const [stylePrompt, userStoryPrompt] = prompt
        .split("||")
        .map((x) => x.trim());

      // we have to limit the size of the prompt, otherwise the rest of the style won't be followed

      let limitedStylePrompt = stylePrompt.trim().slice(0, 77).trim();
      if (limitedStylePrompt.length !== stylePrompt.length) {
        console.log(
          "Sorry folks, the style prompt was cut to:",
          limitedStylePrompt
        );
      }

      // new experimental prompt: let's drop the user prompt, and only use the style
      const lightPanelPromptPrefix: string = joinWords(
        preset.imagePrompt(limitedStylePrompt)
      );

      // this prompt will be used if the LLM generation failed
      const degradedPanelPromptPrefix: string = joinWords([
        ...preset.imagePrompt(limitedStylePrompt),

        // we re-inject the story, then
        userStoryPrompt,
      ]);

      // we always generate panels 2 by 2
      const nbPanelsToGenerate = 2;

      /*
      console.log("going to call getStoryContinuation based on: " + JSON.stringify({
        previousNbPanels,
        currentNbPanels,
        nbPanelsToGenerate,
        "ref.current:": ref.current,
      }, null, 2))
      */
      // console.log(captions);

      for (
        let currentPanel = previousNbPanels;
        currentPanel < currentNbPanels;
        currentPanel += nbPanelsToGenerate
      ) {
        try {
          const candidatePanels = await getStoryContinuation({
            preset,
            stylePrompt,
            userStoryPrompt,
            nbPanelsToGenerate,
            maxNbPanels,

            // existing panels are critical here: this is how we can
            // continue over an existing story
            existingPanels: ref.current.existingPanels,
          });
          // console.log("LLM generated some new panels:", candidatePanels)
          // console.log(
          //   preset,
          //   stylePrompt,
          //   userStoryPrompt,
          //   nbPanelsToGenerate,
          //   maxNbPanels
          // );

          ref.current.existingPanels.push(...candidatePanels);
          // console.log("ref.current.existingPanels.push(...candidatePanels) successful, now we have ref.current.existingPanels = ", ref.current.existingPanels)

          // console.log(`main.tsx: converting the ${nbPanelsToGenerate} new panels into image prompts..`)

          const startAt = currentPanel;
          const endAt = currentPanel + nbPanelsToGenerate;
          for (let p = startAt; p < endAt; p++) {
            ref.current.newCaptions.push(
              ref.current.existingPanels[p]?.caption.trim() || "..."
            );
            const newPanel = joinWords([
              // what we do here is that ideally we give full control to the LLM for prompting,
              // unless there was a catastrophic failure, in that case we preserve the original prompt
              ref.current.existingPanels[p]?.instructions
                ? lightPanelPromptPrefix
                : degradedPanelPromptPrefix,

              ref.current.existingPanels[p]?.instructions || "",
            ]);
            ref.current.newPanelsPrompts.push(newPanel);

            console.log(
              `main.tsx: image prompt for panel ${p} => "${newPanel}"`
            );
          }

          // update the frontend
          // console.log("updating the frontend..")
          setCaptions(ref.current.newCaptions);
          setPanels(ref.current.newPanelsPrompts);

          setGeneratingStory(false);
        } catch (err) {
          console.log("main.tsx: LLM generation failed:", err);
          setGeneratingStory(false);
          break;
        }
        if (currentPanel > currentNbPanels / 2) {
          console.log("main.tsx: we are halfway there, hold tight!");
          // setWaitABitMore(true)
        }

        // we could sleep here if we want to
        // await sleep(1000)
      }

      /*
      setTimeout(() => {
        setGeneratingStory(false)
        setWaitABitMore(false)
      }, enableRateLimiter ? 12000 : 0)
      */
    });
  }, [prompt, preset?.label, previousNbPanels, currentNbPanels, maxNbPanels]); // important: we need to react to preset changes too
  const comicRef = useRef<HTMLDivElement>(null);
  const downloadComic = () => {
    const canvas = comicRef.current;

    // Use html2canvas to capture the canvas element as an image
    canvas &&
      html2canvas(canvas).then((canvasImage) => {
        const imgData = canvasImage.toDataURL("image/png");

        // Create a PDF document
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvasImage.height * imgWidth) / canvasImage.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("canvas.pdf");
      });
  };

  useEffect(() => {
    console.log(captions, captions.length);

    setStoryCaption(captions.join("\n"));
    captions.length != 0 &&
      geminiComicStory(captions.join("\n"))
        .then((res) => {
          console.log(res);
          setStory(res);
        })
        .catch((err) => {
          console.log(err);
          setStory("Story generation pending...");
        });
  }, [captions.length, captions]);

  return (
    <>
      <Suspense>
        <TopMenu />
        <div
          className={cn(
            `flex bg items-start w-screen h-screen pt-24 md:pt-[72px] overflow-y-scroll`,
            `transition-all duration-200 ease-in-out`,
            zoomLevel > 105 ? `px-0` : `pl-1 pr-8 md:pl-16 md:pr-16`,
            `print:pt-0 print:px-0 print:pl-0 print:pr-0`,
            fonts.actionman.className
          )}
        >
          <div
            className={cn(
              `flex flex-col w-full`,
              zoomLevel > 105 ? `items-start` : `items-center`
            )}
          >
            <div
              ref={comicRef}
              className={cn(
                `comic-page`,
                `flex flex-col md:flex-row md:space-x-8 lg:space-x-12 xl:space-x-16 md:items-center md:justify-start`,
                `print:space-x-4 print:flex-row`
              )}
              style={{
                width: `${zoomLevel}%`,
              }}
            >
              {Array(currentNbPages)
                .fill(0)
                .map((_, i) => (
                  <Page key={i} page={i} />
                ))}
            </div>
            {showNextPageButton && (
              <div className="flex flex-col space-y-2 pt-2 pb-6 text-gray-600 dark:text-gray-600">
                <div>Happy with your story?</div>
                <div>
                  You can{" "}
                  <Button
                    onClick={() => {
                      setCurrentNbPages(currentNbPages + 1);
                    }}
                  >
                    Add page {currentNbPages + 1} 👀
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <SignUpCTA /> */}
        <Zoom />
        {/* <BottomBar /> */}
        <div
          className={cn(
            `print:hidden`,
            `z-20 fixed inset-0`,
            `flex flex-row items-center justify-center`,
            `transition-all duration-300 ease-in-out`,
            isGeneratingStory
              ? `bg-zinc-50/30 backdrop-blur-md`
              : `bg-zinc-50/0 backdrop-blur-none pointer-events-none`,
            fonts.actionman.className
          )}
        >
          <div
            className={cn(
              `text-center text-xl text-stone-700 w-[70%]`,
              isGeneratingStory ? `` : `scale-0 opacity-0`,
              `transition-all duration-300 ease-in-out`
            )}
          >
            <div className="bg-white p-3 px-10 border-2 border-priClr boxShadow font-semibold w-max mx-auto ">
              <FaGear className="animate-spin text-3xl w-max mx-auto " />
              <h1 className="text-xl my-3">Generating...</h1>
            </div>
          </div>
        </div>
      </Suspense>
      {isFullStory && (
        <div className="fixed z-[999] bottom-20 right-5 p-3 h-[31rem] w-[19rem] bg-white rounded-lg shadow shadow-black">
          <div className="h-[85%] whitespace-pre-wrap overflow-y-scroll">
            {story}
          </div>
          <div
            className="h-10 select-none mt-2 z-50 px-4 py-2 gap-x-3 bg-stone-900 text-stone-50 hover:bg-stone-900/90 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-50/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-800 cursor-pointer"
            onClick={() => {
              speak(story);
            }}
          >
            <span>Read</span>
            {!speaking ? (
              <HiSpeakerXMark className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            ) : (
              <HiSpeakerWave className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            )}
          </div>
        </div>
      )}
      <div className="fixed flex gap-5 z-[999] bottom-5 right-5 cursor-pointer">
        <div
          className="select-none h-10 z-[999] px-4 py-2 bg-stone-900 text-stone-50 hover:bg-stone-900/90 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-50/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-800 cursor-pointer"
          onClick={() => {
            setIsFullStory((prev) => !prev);
          }}
        >
          Full Story
        </div>
        <div
          className="select-none h-10 z-[999] px-4 py-2 bg-stone-900 text-stone-50 hover:bg-stone-900/90 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-50/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-800 cursor-pointer"
          onClick={() => {
            downloadComic();
          }}
        >
          Download
        </div>
      </div>
    </>
  );
}
