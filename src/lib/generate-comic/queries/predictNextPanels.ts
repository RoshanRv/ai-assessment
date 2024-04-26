import { predict } from "./predict";
import { cleanJson } from "@/lib/generate-comic/cleanJson";
import { createZephyrPrompt } from "@/lib/generate-comic/createZephyrPrompt";
import { dirtyGeneratedPanelCleaner } from "@/lib/generate-comic/dirtyGeneratedPanelCleaner";
import { dirtyGeneratedPanelsParser } from "@/lib/generate-comic/dirtyGeneratedPanelsParser";
import { Preset } from "../presets";
import { sleep } from "../sleep";
import { useStore } from "../../../store/useComic";
import { useCaption } from "@/store/useCaption";

export const predictNextPanels = async ({
  preset,
  prompt = "",
  nbPanelsToGenerate,
  maxNbPanels,
  existingPanels = [],
}: {
  preset: Preset;
  prompt: string;
  nbPanelsToGenerate: number;
  maxNbPanels: number;
  existingPanels: GeneratedPanel[];
}): Promise<GeneratedPanel[]> => {
  // const allCaptions = useStore((s) => s.allCaptions);
  // const { allCaptions, setAllCaptions } = useStore();
  // const { allCaptions, setAllCaptions } = useCaption();

  // console.log("predictNextPanels: ", { prompt, nbPanelsToGenerate })
  // throw new Error("Planned maintenance")

  // In case you need to quickly debug the RENDERING engine you can uncomment this:
  // return mockGeneratedPanels

  const existingPanelsTemplate = existingPanels.length
    ? ` To help you, here are the previous panels and their captions (note: if you see an anomaly here eg. no caption or the same description repeated multiple times, do not hesitate to fix the story): ${JSON.stringify(
        existingPanels,
        null,
        2
      )}`
    : "";

  const firstNextOrLast =
    existingPanels.length === 0
      ? "first"
      : maxNbPanels - existingPanels.length === maxNbPanels
      ? "last"
      : "next";

  const query =
    createZephyrPrompt([
      {
        role: "system",
        content: [
          `You are a writer specialized in ${preset.llmPrompt}`,
          `If the student provides a specific topic, your task is to create a story that explains the topic clearly from scratch, as if narrating to a 5-year-old child. The story should introduce and explain the concept in a simple and understandable manner.`,
          `Please provide detailed drawing instructions and short (2-3 sentences long) speech captions for the ${firstNextOrLast} ${nbPanelsToGenerate} panels (out of ${maxNbPanels} in total) of a new story, but keep it open-ended (it will be continued and expanded later). Please make sure each of those ${nbPanelsToGenerate} panels include info about character gender, age, origin, clothes, colors, location, lights, etc. Only generate those ${nbPanelsToGenerate} panels, but take into account the fact the panels are part of a longer story (${maxNbPanels} panels long).\`and the Ensure the content is clear, simple, and non-harmful, aimed at educating students about the chosen topic.`,
          `Give your response as a VALID JSON array like this: \`Array<{ panel: number; instructions: string; caption: string; }>\`. Be brief and straight to the point, avoiding unnecessary comments.`,
          `Be brief in the instructions and narrative captions of those ${nbPanelsToGenerate} panels, don't add your own comments. The captions must be Educative, smart, understandable. Be straight to the point, and never reply things like "Sure, I can.." etc. Reply using valid JSON!! Important: Write valid JSON!`,
        ]
          .filter((item) => item)
          .join("\n"),
      },
      {
        role: "user",
        content: `The story is about: ${prompt}.${existingPanelsTemplate}`,
      },
    ]) + "\n[{";

  let result = "";

  // we don't require a lot of token for our task
  // but to be safe, let's count ~130 tokens per panel
  const nbTokensPerPanel = 130;

  const nbMaxNewTokens = nbPanelsToGenerate * nbTokensPerPanel;

  try {
    // console.log(`calling predict(${query}, ${nbTotalPanels})`)
    result = `${await predict(query, nbMaxNewTokens)}`.trim();
    console.log("LLM result (1st trial):", result);
    if (!result.length) {
      throw new Error("empty result on 1st trial!");
    }
  } catch (err) {
    // console.log(`prediction of the story failed, trying again..`)
    // this should help throttle things on a bit on the LLM API side
    await sleep(2000);

    try {
      result = `${await predict(query + " \n ", nbMaxNewTokens)}`.trim();
      console.log("LLM result (2nd trial):", result);
      if (!result.length) {
        throw new Error("empty result on 2nd trial!");
      }
    } catch (err) {
      console.error(`prediction of the story failed twice 💩`);
      throw new Error(`failed to generate the story twice 💩 ${err}`);
    }
  }

  // console.log("Raw response from LLM:", result)
  const tmp = cleanJson(result);

  let generatedPanels: GeneratedPanel[] = [];

  try {
    generatedPanels = dirtyGeneratedPanelsParser(tmp);
  } catch (err) {
    // console.log(`failed to read LLM response: ${err}`)
    // console.log(`original response was:`, result)

    // in case of failure here, it might be because the LLM hallucinated a completely different response,
    // such as markdown. There is no real solution.. but we can try a fallback:

    generatedPanels = tmp
      .split("*")
      .map((item) => item.trim())
      .map((cap, i) => ({
        panel: i,
        caption: cap,
        instructions: cap,
      }));
  }

  return generatedPanels.map((res) => dirtyGeneratedPanelCleaner(res));
};
