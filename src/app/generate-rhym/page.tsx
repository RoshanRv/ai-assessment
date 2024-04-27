"use client";

import axios from "axios";
import { ChevronLeft, Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

const SUNO = "82o+0+c/WNeMwL2ucjA01SuiCicYHXCK";
const SUNO1 = "0olSKccoLrQQgDR+OI9AssB28wKOyOvV";
const SUNO2 = "NlSzxywAxOfAO48Z0V4wQCVaKyxNUddi";

const GenerateRhym = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [generatedIds, setGeneratedIds] = useState("");
  const [url, setUrl] = useState("");

  const [old, setOlds] = useState([
    {
      title: "2 Tables",
      url: "https://cdn1.suno.ai/f72311e9-cc30-447b-ad45-28ef9267ecdb.mp3",
    },
    {
      title: "5 Tables",
      url: "https://cdn1.suno.ai/33462f42-379e-4758-9184-033acdd509e3.mp3",
    },
    {
      title: "Periodic Table from 1 - 10",
      url: "https://audiopipe.suno.ai/?item_id=fde1e2bc-9b4f-4a4c-af83-231ce31758f2",
    },
  ]);

  const handleGenerateSong = async () => {
    try {
      const { data } = await axios.post(
        `https://api.sunoaiapi.com/api/v1/gateway/generate/gpt_desc`,
        {
          gpt_description_prompt: input,
          prompt:
            "the song should be like a rhym for children, it shouldn't rap it should be melody like rhyms.",
        },
        {
          headers: {
            "api-key": SUNO,
          },
        }
      );

      if (data.msg === "success") {
        const songId = data.data[0]?.song_id;
        const prompt = data.data[0]?.meta_prompt;
        songId && setGeneratedIds(songId);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getSong = async () => {
    try {
      const { data } = await axios.get(
        `https://api.sunoaiapi.com/api/v1/gateway/feed/${generatedIds}`,

        {
          headers: {
            "api-key": SUNO,
          },
        }
      );

      if (data.msg === "success") {
        const url = data.data?.audio_url;
        console.log(url);

        const prompt = data.data?.meta_prompt;
        url && setUrl(url);
      }
    } catch (err) {
      console.log(err);
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
          placeholder="Enter Prompt"
          className={
            "p-4 border-2 border-priClr bg-white  boxShadow outline-0 w-full"
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
        <button
          disabled={!input}
          onClick={() => {
            handleGenerateSong();
          }}
          className={` w-1/5 cursor-pointer bg-priClr  grid content-center boxShadow py-3`}
        >
          <p className=" text-white font-black tracking-widest ">
            Generate Rhym
          </p>
        </button>
      </div>
      {/* Result ID */}
      <div>
        {generatedIds && (
          <div className="items-center flex gap-4">
            <p className="text-xl p-3 boxShadow bg-white border-2 border-priClr">
              {generatedIds}
            </p>
            <button
              onClick={() => {
                getSong();
              }}
              className={` w-1/5 cursor-pointer bg-priClr text-white font-semibold  grid content-center boxShadow py-3`}
            >
              Get Song
            </button>
          </div>
        )}
      </div>
      {/* URL */}
      {url && (
        <audio controls className="mx-auto mt-5">
          <source src={url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      {/* // OLD */}
      {/* Prv Rhyms */}
      <h3 className="text-xl font-semibold py-6">Previous Rhyms</h3>
      <div className="grid grid-cols-3 gap-10 items-center ">
        {old.map((ol) => (
          <div
            key={ol.url}
            className="p-4 boxShadow flex  flex-col gap-4 bg-white border-2 border-priClr"
          >
            <h4 className="text-lg font-semibold">{ol.title}</h4>
            <audio controls className="mx-auto mt-5">
              <source src={ol.url} />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GenerateRhym;
