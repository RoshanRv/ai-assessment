import { predictNextPanels } from "./predictNextPanels";
import { Preset, presets } from "../presets";
import { sleep } from "../sleep";
import { joinWords } from "../joinWords";

export const getStoryContinuation = async ({
  preset,
  stylePrompt = "",
  userStoryPrompt = "",
  nbPanelsToGenerate,
  maxNbPanels,
  existingPanels = [],
}: {
  preset: Preset;
  stylePrompt?: string;
  userStoryPrompt?: string;
  nbPanelsToGenerate: number;
  maxNbPanels: number;
  existingPanels?: GeneratedPanel[];
}): Promise<GeneratedPanel[]> => {
  let panels: GeneratedPanel[] = [];
  const startAt: number = existingPanels.length + 1 || 0;
  const endAt: number = startAt + nbPanelsToGenerate;

  try {
    const prompt = joinWords([userStoryPrompt]);

    const panelCandidates: GeneratedPanel[] = await predictNextPanels({
      preset,
      prompt,
      nbPanelsToGenerate,
      maxNbPanels,
      existingPanels,
    });

    console.log("prompt:", prompt);

    // console.log("LLM responded with panelCandidates:", panelCandidates)

    // we clean the output from the LLM
    // most importantly, we need to adjust the panel index,
    // to start from where we last finished
    for (let i = 0; i < nbPanelsToGenerate; i++) {
      panels.push({
        panel: startAt + i,
        instructions: `${panelCandidates[i]?.instructions || ""}`,
        caption: `${panelCandidates[i]?.caption || ""}`,
      });
    }
  } catch (err) {
    // console.log("LLM step failed due to:", err)
    // console.log("we are now switching to a degraded mode, using 4 similar panels")
    panels = [];
    for (let p = startAt; p < endAt && p; p++) {
      panels.push({
        panel: p,
        instructions: joinWords([
          stylePrompt,
          userStoryPrompt,
          `${".".repeat(p)}`,
        ]),
        caption: "(Sorry, LLM generation failed: using degraded mode)",
      });
    }
    await sleep(2000);
    // console.error(err)
  } finally {
    return panels;
  }
};
