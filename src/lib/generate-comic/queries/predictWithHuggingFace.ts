// "use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function predict(
  inputs: string,
  nbMaxNewTokens: number
): Promise<string> {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyApzireBTzNrki4j_ycbDForcnTNslCQiM"
  );

  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig: {
      maxOutputTokens: nbMaxNewTokens,
    },
  });
  let instructions = "";

  try {
    for await (const output of (await model.generateContentStream(inputs))
      .stream) {
      if (output.candidates) {
        console.log(output.candidates[0].content);

        instructions += output.candidates[0].content.parts[0].text;
      }

      // process.stdout.write(output.token.text)
      if (
        instructions.includes("</s>") ||
        instructions.includes("<s>") ||
        instructions.includes("/s>") ||
        instructions.includes("[INST]") ||
        instructions.includes("[/INST]") ||
        instructions.includes("<SYS>") ||
        instructions.includes("<<SYS>>") ||
        instructions.includes("</SYS>") ||
        instructions.includes("<</SYS>>") ||
        instructions.includes("<|user|>") ||
        instructions.includes("<|end|>") ||
        instructions.includes("<|system|>") ||
        instructions.includes("<|assistant|>")
      ) {
        break;
      }
    }
  } catch (err) {
    // console.error(`error during generation: ${err}`)

    // a common issue with Llama-2 might be that the model receives too many requests
    if (`${err}` === "Error: Model is overloaded") {
      instructions = ``;
    }
  }

  // need to do some cleanup of the garbage the LLM might have gave us
  return instructions
    .replaceAll("<|end|>", "")
    .replaceAll("<s>", "")
    .replaceAll("</s>", "")
    .replaceAll("/s>", "")
    .replaceAll("[INST]", "")
    .replaceAll("[/INST]", "")
    .replaceAll("<SYS>", "")
    .replaceAll("<<SYS>>", "")
    .replaceAll("</SYS>", "")
    .replaceAll("<</SYS>>", "")
    .replaceAll("<|system|>", "")
    .replaceAll("<|user|>", "")
    .replaceAll("<|all|>", "")
    .replaceAll("<|assistant|>", "")
    .replaceAll('""', '"');
}
