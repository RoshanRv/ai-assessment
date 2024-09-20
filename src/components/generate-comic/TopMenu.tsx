"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useLocalStorage } from "usehooks-ts";

import layoutPreview0 from "/public/layouts/layout0.jpg";
import layoutPreview1 from "/public/layouts/layout1.jpg";
import layoutPreview2 from "/public/layouts/layout2.jpg";
import layoutPreview3 from "/public/layouts/layout3.jpg";

import { useStore } from "@/store/useComic";
import {
  defaultPreset,
  nonRandomPresets,
  PresetName,
  presets,
} from "@/lib/generate-comic/presets";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./UI/select";
import { localStorageKeys } from "@/lib/generate-comic/settings-dialog/localStorageKeys";
import { defaultConfig } from "next/dist/server/config-shared";
import { defaultSettings } from "@/lib/generate-comic/settings-dialog/defaultSettings";
import {
  allLayoutLabels,
  defaultLayout,
  getRandomLayoutName,
  LayoutName,
  nonRandomLayouts,
} from "./Layouts";
import { cn } from "@/lib/generate-comic/cn";
import { Switch } from "./UI/switch";
import { defaultFont, FontName } from "@/lib/generate-comic/fonts";
import { Label } from "./UI/label";
import { Input } from "./UI/input";
import Button from "../button/Button";
import useQuizz from "@/store/useQuiz";
import Link from "next/link";

const layoutIcons: Partial<Record<LayoutName, StaticImageData>> = {
  Layout0: layoutPreview0,
  Layout1: layoutPreview1,
  Layout2: layoutPreview2,
  Layout3: layoutPreview3,
  Layout4: undefined,
};

export function TopMenu() {
  // const font = useStore(state => state.font)
  // const setFont = useStore(state => state.setFont)
  const preset = useStore((state) => state.preset);
  const prompt = useStore((state) => state.prompt);
  const layout = useStore((state) => state.layout);
  const setLayout = useStore((state) => state.setLayout);

  const setShowCaptions = useStore((state) => state.setShowCaptions);
  const showCaptions = useStore((state) => state.showCaptions);

  const currentNbPages = useStore((state) => state.currentNbPages);
  const setCurrentNbPages = useStore((state) => state.setCurrentNbPages);

  const generate = useStore((state) => state.generate);

  const isGeneratingStory = useStore((state) => state.isGeneratingStory);
  const atLeastOnePanelIsBusy = useStore(
    (state) => state.atLeastOnePanelIsBusy
  );
  const isBusy = isGeneratingStory || atLeastOnePanelIsBusy;

  const [lastDraftPromptB, setLastDraftPromptB] = useLocalStorage<string>(
    "AI_COMIC_FACTORY_LAST_DRAFT_PROMPT_B",
    ""
  );

  const searchParams = useSearchParams();
  const ques = useQuizz((state) => state.ques);
  const requestedPreset =
    (searchParams?.get("preset") as PresetName) || defaultPreset;
  const requestedFont = (searchParams?.get("font") as FontName) || defaultFont;
  const requestedPrompt = (searchParams?.get("prompt") as string) || "";
  const requestedLayout =
    (searchParams?.get("layout") as LayoutName) || defaultLayout;

  const [draftPromptA, setDraftPromptA] = useState("");
  const [draftPromptB, setDraftPromptB] = useState(lastDraftPromptB);
  const draftPrompt = `${draftPromptA}||${draftPromptB}`;

  const [draftPreset, setDraftPreset] = useState<PresetName>(requestedPreset);
  const [draftLayout, setDraftLayout] = useState<LayoutName>(requestedLayout);

  const [hasGeneratedAtLeastOnce, setHasGeneratedAtLeastOnce] =
    useLocalStorage<boolean>(
      localStorageKeys.hasGeneratedAtLeastOnce,
      defaultSettings.hasGeneratedAtLeastOnce
    );

  const [showAuthWall, setShowAuthWall] = useState(false);

  // we synchronize the draft prompt with the local storage

  const handleSubmit = () => {
    console.log("handleSubmit");

    // if (hasGeneratedAtLeastOnce) {
    //   // need to check if the user is authenticated
    //   // setShowAuthWall(true);
    //   return;
    // }

    const promptChanged = draftPrompt.trim() !== prompt.trim();
    const presetChanged = draftPreset !== preset.id;
    const layoutChanged = draftLayout !== layout;
    if (!isBusy && (promptChanged || presetChanged || layoutChanged)) {
      generate(draftPrompt, draftPreset, draftLayout);
    }
  };

  useEffect(() => {
    if (ques) setDraftPromptB(ques);
    else setDraftPromptB("");
  }, []);

  useEffect(() => {
    const layoutChanged = draftLayout !== layout;
    if (layoutChanged && !isBusy) {
      setLayout(draftLayout);
    }
  }, [layout, draftLayout, isBusy]);

  return (
    <div
      className={cn(
        `print:hidden`,
        `z-10 fixed top-0 left-0 right-0`,
        `flex flex-col md:flex-row w-full justify-between items-center`,
        `backdrop-blur-xl`,
        `transition-all duration-200 ease-in-out`,
        `px-2 py-2 border-b-1 border-gray-50 dark:border-gray-50`,
        //`bg-[#2d435c] dark:bg-[#2d435c] text-gray-50 dark:text-gray-50`,

        `space-y-2 md:space-y-0 md:space-x-3 lg:space-x-6`
      )}
    >
      <div className="flex flex-row space-x-2 md:space-x-3 w-full md:w-auto">
        <div
          className={cn(
            `transition-all duration-200 ease-in-out`,
            `flex flex-row items-center justify-start space-x-3`,
            `flex-grow`
          )}
        >
          {/* <Label className="flex text-2xs md:text-sm md:w-24">Style:</Label> */}

          {/* <Select
            defaultValue={defaultPreset}
            onValueChange={(value) => {
              setDraftPreset(value as PresetName);
            }}
            disabled={isBusy}
          >
            <SelectTrigger className="flex-grow bg-gray-100 text-gray-700 dark:bg-gray-100 dark:text-gray-700">
              <SelectValue
                className="text-2xs md:text-sm"
                placeholder="Style"
              />
            </SelectTrigger>
            <SelectContent>
              {nonRandomPresets.map((key) => (
                <SelectItem key={key} value={key}>
                  {presets[key].label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}
        </div>
        {/* <div
          className={cn(
            `transition-all duration-200 ease-in-out`,
            `flex flex-row items-center justify-start space-x-3`,
            `w-40`
          )}
        >
         

          <Select
            defaultValue={defaultLayout}
            onValueChange={(value) => {
              setDraftLayout(value as LayoutName);
            }}
            disabled={isBusy}
          >
            <SelectTrigger className="flex-grow bg-gray-100 text-gray-700 dark:bg-gray-100 dark:text-gray-700">
              <SelectValue
                className="text-2xs md:text-sm"
                placeholder="Layout"
              />
            </SelectTrigger>
            <SelectContent>
              {nonRandomLayouts.map((key) => (
                <SelectItem key={key} value={key} className="w-full">
                  <div className="space-x-6 flex flex-row items-center justify-between">
                    <div className="flex">{(allLayoutLabels as any)[key]}</div>

                    {(layoutIcons as any)[key] ? (
                      <Image
                        className="rounded-sm opacity-75"
                        src={(layoutIcons as any)[key]}
                        width={20}
                        height={18}
                        alt={key}
                      />
                    ) : null}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        // </div> */}
        {/* // <div className="flex flex-row items-center space-x-3">
        //   <Switch checked={showCaptions} onCheckedChange={setShowCaptions} />
        //   <Label className="text-gray-200 dark:text-gray-200">
        //     <span className="hidden md:inline">Caption</span>
        //     <span className="inline md:hidden">Cap.</span>
        //   </Label>
        // </div> */}
        {/*
        <div className={cn(
          `transition-all duration-200 ease-in-out`,
          `flex flex-row items-center space-x-3 w-1/2 md:w-auto md:hidden`
        )}>
          <Label className="flex text-2xs md:text-sm md:w-24">Font:</Label>
          <Select
            defaultValue={fontList.includes(preset.font) ? preset.font : "cartoonist"}
            onValueChange={(value) => { setFont(value as FontName) }}
            disabled={atLeastOnePanelIsBusy}
            >
            <SelectTrigger className="flex-grow">
              <SelectValue className="text-2xs md:text-sm" placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(fonts)
                .map((font) =>
                <SelectItem
                  key={font}
                  value={font}>{
                    font
                  }</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
          */}
      </div>
      <div
        className={cn(
          `transition-all duration-200 ease-in-out`,
          `flex  flex-grow flex-col space-y-2 md:space-y-0 md:flex-row items-center md:space-x-3 w-full md:w-auto`
        )}
      >
        <div className="flex w-full items-center">
          <Link href={"/"} className="text-3xl font-bold mr-4">
            <h3>StoryVerse</h3>
          </Link>
          {/* ### INPUT #### */}
          <div className="flex w-8/12 mx-auto justify-between">
            <input
              placeholder="Topic (eg. Velocity)"
              className={
                "p-4 py-2.5 border-2 border-priClr bg-white  boxShadow outline-0 w-full"
              }
              // disabled={atLeastOnePanelIsBusy}
              onChange={(e) => {
                setDraftPromptB(e.target.value);
              }}
              onKeyDown={({ key }) => {
                if (key === "Enter") {
                  handleSubmit();
                }
              }}
              value={draftPromptB}
            />
          </div>
          {/* #### BTN ###### */}
          <button
            disabled={!draftPrompt?.trim().length || isBusy}
            onClick={() => {
              handleSubmit();
            }}
            className={` w-1/5 cursor-pointer bg-priClr  grid content-center boxShadow py-3`}
          >
            <p className=" text-white font-black tracking-widest ">Generate</p>
          </button>
        </div>
      </div>
      {/*
        Let's add this feature later, because right now people
        are confused about why they can't activate it
      <div className={cn(
          `transition-all duration-200 ease-in-out`,
          `hidden md:flex flex-row items-center space-x-3 w-full md:w-auto`
      )}>
        <Label className="flex text-2xs md:text-sm w-24">Font:</Label>
        <Select
          defaultValue={fontList.includes(preset.font) ? preset.font : "actionman"}
          onValueChange={(value) => { setFont(value as FontName) }}
          // disabled={isBusy}
          disabled={true}
          >
          <SelectTrigger className="flex-grow">
            <SelectValue className="text-2xs md:text-sm" placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(fonts)
              .map((font) =>
              <SelectItem
                key={font}
                value={font}>{
                  font
                }</SelectItem>
            )}
          </SelectContent>
        </Select>
      </div>
              */}
    </div>
  );
}
