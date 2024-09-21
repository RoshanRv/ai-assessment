"use client";

import SelectTextField from "@/components/SelectField";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { FaVolumeUp } from "react-icons/fa";
import { ElevenLabsClient } from "elevenlabs";
import { cn } from "@/lib/generate-comic/cn";
import { FaGear } from "react-icons/fa6";

const StoryNarrator = () => {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("");
  const [history, setHistory] = useState([
    {
      role: "system",
      content: `Imagine you're a creative story narrator. You're here to help me create an interactive story based on user input. Generate the story in the topic of <user input title> and in the theme of <user input theme>. You'll kick things off with an opening line, then generate multiple options of the story flow and ask for the user to select options and guide the story flow. With each response, you'll continue the story and generate new options, waiting for the user to select again, making the process fun and engaging. The response or solution you're providing should always be in JSON FORMAT.\n\nFor example title: "Lost City", theme: "Adventure":\n\nNow, let's begin our story!\n\nYou've always been fascinated by the stories of a hidden city deep within the jungle. They call it Zerzura, a place where ancient treasures and mysterious artifacts lie waiting to be discovered.\n\nAs you venture into the dense foliage, the sounds of the jungle grow louder, and the air thickens with humidity. You push through the underbrush, your heart racing with excitement.\n\nHere are your options:\n\n json\n{\n  \"options\": [\n    {\n      \"description\": \"Follow the sound of a nearby river, which might lead you to Zerzura\"\n    },\n    {\n      \"description\": \"Climb one of the tall trees to get a better view of your surroundings\"\n    },\n    {\n      \"description\": \"Search for any signs of recent human presence or ancient ruins\"\n    }\n  ]\n}\n\n\nWhich option do you choose? Please respond in JSON format with the selected option number (1, 2, or 3).`,
    },
  ]);

  const [stories, setStories] = useState<
    { story: string; options: { description: string }[] }[]
  >([]);
  const [opt, setOpt] = useState<number | null>(null);
  const [isEnd, setIsEnd] = useState(false);
  const [generating, setGenerating] = useState(false);

  const router = useRouter();

  const handleNarrate = async () => {
    setGenerating(true);
    const messages = [
      ...history,
      {
        role: "user",
        content: `user input title: ${input}, user input theme: ${theme}`,
      },
    ];

    try {
      const response = await axios.post(`http://localhost:11434/api/chat`, {
        model: "llama3.1",
        messages,
        stream: false,
      });

      const assisstanceMsg = response.data.message; // {role:assisstant, content: "response"}
      const assisstanceStory = assisstanceMsg.content;
      const optionsStart = assisstanceStory.indexOf("Here are your options:");
      const updatedStory = assisstanceStory.slice(0, optionsStart);
      const jsonStart = assisstanceStory.indexOf("{");
      const jsonEnd = assisstanceStory.lastIndexOf("}") + 1;
      const jsonOptions = assisstanceStory.slice(jsonStart, jsonEnd);
      const options = JSON.parse(jsonOptions);

      setStories([
        ...stories,
        { story: updatedStory, options: options.options },
      ]);

      setHistory([...messages, assisstanceMsg]);
    } catch (error) {
      console.log(error);
    } finally {
      setGenerating(false);
    }
  };

  const handleOption = async (type: "continue" | "end") => {
    setGenerating(true);
    try {
      const messages = [
        ...history,
        {
          role: "user",
          content:
            type === "continue" ? opt?.toString() : `${opt}, and end the story`,
        },
      ];

      const response = await axios.post(`http://localhost:11434/api/chat`, {
        model: "llama3.1",
        messages,
        stream: false,
      });
      setOpt(null);
      const assisstanceMsg = response.data.message; // {role:assisstant, content: "response"}
      const assisstanceStory = assisstanceMsg.content;

      if (type === "continue") {
        const optionsStart = assisstanceStory.indexOf("Here are your options:");
        const updatedStory = assisstanceStory.slice(0, optionsStart);
        const jsonStart = assisstanceStory.indexOf("{");
        const jsonEnd = assisstanceStory.lastIndexOf("}") + 1;
        const jsonOptions = assisstanceStory.slice(jsonStart, jsonEnd);
        const options = JSON.parse(jsonOptions);

        setStories([
          ...stories,
          { story: updatedStory, options: options.options },
        ]);
        setHistory([...messages, assisstanceMsg]);
      } else {
        setIsEnd(true);
        setStories([...stories, { story: assisstanceStory, options: [] }]);
        setHistory([...messages, assisstanceMsg]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setGenerating(false);
    }
  };

  const startVoiceOver = async () => {
    try {
      const client = new ElevenLabsClient({
        apiKey: "sk_084ab5d9177e0b6fcacc39c593df7ca5588e805f62d7b522",
      });

      // Generate the audio stream from ElevenLabs
      const audioStream = await client.generate({
        voice: "Serena",
        model_id: "eleven_turbo_v2",
        text: stories.map((story) => story.story).join(`\n`), // Ensure 'story' is defined and contains text
      });

      // Collect audio chunks
      const chunks = [];
      for await (const chunk of audioStream) {
        chunks.push(chunk);
      }

      // Concatenate chunks into a single Buffer
      const content = Buffer.concat(chunks);

      // Convert Buffer to Blob (for browsers)
      const audioBlob = new Blob([content], { type: "audio/mpeg" });

      // Create a URL for the Blob and play the audio
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      // Play the audio when the user clicks
      audio.play().then(() => {
        // setIsPlaying(true);
      });
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  return (
    <main className="p-5 flex flex-col gap-2  bg min-h-screen ">
      <div className="flex gap-4 items-center ">
        <div
          onClick={() => router.push("/dashboard")}
          // href={"/dashboard"}
          className="bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-3 py-2 rounde-md shadow-black shadow-sm font-semibold"
        >
          <BiChevronLeft className="text-3xl " />
        </div>
        <input
          placeholder="Enter Title For Story"
          className={
            "p-4 py-3 border-2 border-priClr bg-white  boxShadow outline-0 w-full"
          }
          // disabled={atLeastOnePanelIsBusy}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              // handleSubmit();
            }
          }}
          value={input}
        />
        <div className="w-96">
          <SelectTextField
            list={[
              "👻 Horror",
              "❤️ Romance",
              "🎢 Adventure",
              "🎭 Comedy",
              "🪄 Fantasy",
              "🔮 Mystery",
              "🌌 Sci-Fi",
            ]}
            setValue={setTheme}
            value={theme}
            placeholder="Select Theme"
            type="text"
          />
        </div>
        <button
          disabled={!input}
          onClick={() => {
            handleNarrate();
          }}
          className={` bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-3 py-3 w-1/5 text-center rounde-md shadow-black shadow-sm font-semibold`}
        >
          <p className=" text-white font-black tracking-widest mx-auto">
            Generate
          </p>
        </button>
      </div>
      {/* #### New Story #### */}
      {stories.length > 0 ? (
        <div className="p-6 boxShadow bg-white border-2 border-priClr mt-8">
          {stories.map((story, index) => (
            <div className="flex flex-col gap-2">
              <p className="whitespace-pre-wrap font-medium ">{story.story}</p>
              {/*#### Story Options ### */}
              {stories.length - 1 === index ? (
                generating ? (
                  <div
                    className={cn(
                      `text-center text-xl text-stone-700 w-[70%] mx-auto`,
                      generating ? `` : `scale-0 opacity-0`,
                      `transition-all duration-300 ease-in-out`
                    )}
                  >
                    <div className="bg-white p-3 px-10 border-2 border-priClr boxShadow font-semibold w-max mx-auto ">
                      <FaGear className="animate-spin text-3xl w-max mx-auto " />
                      <h1 className="text-xl my-3">Generating...</h1>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    {story.options.map((option, index) => (
                      <button
                        onClick={() => setOpt(index + 1)}
                        className={`p-2 px-4 ${
                          opt === index + 1
                            ? "bg-priClr text-white border-black"
                            : "bg-white text-priClr border-priClr"
                        }  cardShadow text-left boxShadow border-2  font-medium`}
                      >
                        {option.description}
                      </button>
                    ))}
                    {!isEnd ? (
                      <div className="flex gap-2 justify-between">
                        <button
                          onClick={() => {
                            handleOption("end");
                          }}
                          className={` bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-3 py-3 w-1/5 text-center rounde-md shadow-black shadow-sm font-semibold`}
                        >
                          <p className=" text-white font-black tracking-widest mx-auto">
                            End Story
                          </p>
                        </button>
                        <button
                          onClick={() => {
                            handleOption("continue");
                          }}
                          className={` bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-3 py-3 w-1/5 text-center rounde-md shadow-black shadow-sm font-semibold`}
                        >
                          <p className=" text-white font-black tracking-widest mx-auto">
                            Continue Story
                          </p>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          startVoiceOver();
                          // handleOption("end");
                        }}
                        className={` bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 py-3 w-max px-6 text-center rounde-md shadow-black shadow-sm font-semibold`}
                      >
                        <div className="flex gap-2 items-center">
                          <p className=" text-white font-black tracking-widest mx-auto">
                            Narrate
                          </p>
                          <FaVolumeUp className="text-xl" />
                        </div>
                      </button>
                    )}
                  </div>
                )
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ) : (
        generating && (
          <div
            className={cn(
              `text-center text-xl text-stone-700 w-[70%] mx-auto`,
              generating ? `` : `scale-0 opacity-0`,
              `transition-all duration-300 ease-in-out`
            )}
          >
            <div className="bg-white p-3 px-10 border-2 border-priClr boxShadow font-semibold w-max mx-auto ">
              <FaGear className="animate-spin text-3xl w-max mx-auto " />
              <h1 className="text-xl my-3">Generating...</h1>
            </div>
          </div>
        )
      )}
    </main>
  );
};

export default StoryNarrator;
