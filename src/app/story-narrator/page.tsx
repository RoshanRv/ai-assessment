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
  // const [stories, setStories] = useState<
  //   { story: string; options: { description: string }[] }[]
  // >([
  //   {
  //     story:
  //       "Let's begin our story!\n\nYou've always been drawn to the sea and the mystery of a lost island that's rumored to be hidden in the vast expanse of the Pacific Ocean. They call it Isla Perdida, a place where ancient treasures and untold riches lie waiting to be discovered.\n\nAs you set sail on your trusty vessel, the \"Sea Dragon\", the warm sun beats down on your face, and the salty sea air fills your lungs. You've spent years studying the maps and tales of previous explorers who claim to have seen the island's outline on the horizon. Your crew is a mix of seasoned sailors and skilled adventurers, all eager to uncover the secrets of Isla Perdida.\n\nAs you navigate through the choppy waters, the crew begins to sense that they're getting close. The atmosphere is electric with anticipation.\n\n",
  //     options: [
  //       {
  //         description:
  //           "Order your crew to drop anchor and launch a small boat to scout out the island's coastline",
  //       },
  //       {
  //         description:
  //           "Continue sailing at full speed, aiming to catch the island off guard before it has time to react",
  //       },
  //       {
  //         description:
  //           "Take a moment to review the maps and charts with your crew, making sure you're all on the same page about the island's layout and potential dangers",
  //       },
  //     ],
  //   },
  //   {
  //     story:
  //       "You decide to order your crew to drop anchor and launch a small boat to scout out the island's coastline. Your trusted first mate, Tom, expertly maneuvers the \"Sea Dragon\" into position, and a small inflatable dinghy is lowered into the water.\n\nAs you take the helm of the dinghy, your crew hands you a pair of binoculars and a compass. You set off towards the island, following the coastline as it curves around a small cove. The sea is calm, and the sun is high in the sky, casting a golden glow over the water.\n\nAs you draw closer to the island, you notice that the vegetation appears to be thick and lush, with vines and creepers crawling up the trunks of massive trees. You see what looks like a small clearing ahead, surrounded by a ring of large stones.\n\nSuddenly, your binoculars pick out something strange - a piece of wreckage from an old ship, half-buried in the sand. It looks like it's been there for years, but something about it seems... wrong.\n\n",
  //     options: [
  //       {
  //         description:
  //           "Investigate the wreckage and see if you can find any clues about what happened to the ship",
  //       },
  //       {
  //         description:
  //           "Head straight for the clearing and the ring of stones - something about it feels significant",
  //       },
  //       {
  //         description:
  //           "Circle back around the island's coastline, making sure there are no other signs of recent human activity or danger",
  //       },
  //     ],
  //   },
  //   {
  //     story:
  //       "You decide to investigate the wreckage and see if you can find any clues about what happened to the ship. As you draw closer, you notice that the debris is scattered all over the beach, but there's a large piece of hull planking that appears to have been torn off in some kind of accident.\n\nAs you examine the planking, you realize that it's not just any ordinary wood - it's an old-style wooden plank, similar to those used on ships from centuries ago. You start to feel a thrill of excitement as you wonder what could be the story behind this ancient shipwreck.\n\nYou begin to search around the beach and nearby rocks for other clues. After a few minutes of searching, your hands brush against something hard in the sand. It's an old iron anchor, partially buried in the sand.\n\nYou pull out the anchor and examine it closely. The inscription on the anchor reads: \"Property of the Royal Navy, 1750\". You can't believe what you're seeing - this is a piece of history that could change everything!\n\nWith the discovery of this ancient shipwreck, your crew gathers around to hear your excited tales of adventure and discovery. Together, you all agree that finding Isla Perdida was only the beginning of an incredible journey.\n\n Congratulations, you've reached the end of the story! I hope you enjoyed the ride!\n\nHere's a final summary:\n\n**You discovered:**\n\n* A hidden island (Isla Perdida)\n* An ancient shipwreck from 1750\n* A mysterious and potentially significant clearing on the island\n\n**The crew is...**\n\n* Excited by your discoveries and eager to explore further\n* Confident in their skills and abilities as sailors and adventurers\n* United in their quest for adventure and discovery!\n\nAnd that's where our story comes to an end. Thank you so much for playing along! Would you like to play another interactive story?",
  //     options: [],
  //   },
  // ]);
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
