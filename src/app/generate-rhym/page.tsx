"use client";

import axios from "axios";
import { BiChevronLeft } from "react-icons/bi";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import useUser from "@/store/useUser";
import { title } from "process";
import { useStore } from "@/store/useComic";
import { cn } from "@/lib/generate-comic/cn";
import { fonts } from "@/lib/generate-comic/fonts";
import { FaGear } from "react-icons/fa6";
import video1 from "../../../public/video1.mp4";
import video2 from "../../../public/video2.mp4";
import video3 from "../../../public/video3.mp4";
import video4 from "../../../public/video4.mp4";
import video5 from "../../../public/video5.mp4";

type Rhymes = {
  id?: string;
  title: string;
  video_url: string;
};

const GenerateRhym = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const resultedParam = useSearchParams().get("resulted");
  const [generatedIds, setGeneratedIds] = useState("");
  const [url, setUrl] = useState("");
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  const { user } = useUser((state) => state);
  const isGeneratingStory = useStore((s) => s.isGeneratingStory);
  const setGeneratingStory = useStore((s) => s.setGeneratingStory);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isResulted, setIsResulted] = useState(resultedParam);
  const [old, setOlds] = useState<Rhymes[]>([
    // {
    //   title: "Periodic Table from 1 - 10",
    //   video_url:
    //     "https://cdn1.suno.ai/94c9d99f-f55c-47fd-9e25-2c156795fb9f.mp4",
    // },
    // {
    //   title: "5 Tables",
    //   video_url:
    //     "https://cdn1.suno.ai/a50fac22-b997-45e3-a68c-f2ce5dab1184.mp4",
    // },
    // {
    //   title: "2 Tables",
    //   video_url:
    //     "https://cdn1.suno.ai/cfeadbf3-447e-4228-90d7-24cdd00bc47e.mp4",
    // },
  ]);

  const [lists, setLists] = useState<Rhymes[]>([
    {
      title: "Video 1",
      video_url: video1,
    },
    {
      title: "Video 2",
      video_url: video2,
    },
    {
      title: "Video 3",
      video_url: video3,
    },
    {
      title: "Video 4",
      video_url: video4,
    },
    {
      title: "Video 5",
      video_url: video5,
    },
  ]);

  const getRhymes = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/rhymes?email=student@gmail.com`
      );
      console.log(data);

      const dbRhymes: Rhymes[] = data["rhymes"].map((d: Rhymes) => ({
        id: d.id,
        title: d.title,
        video_url: d.video_url,
      }));
      setOlds(dbRhymes);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.load();
          videoRef.current.addEventListener("canplay", () => {
            videoRef.current?.play();
          });
        }
      }, 5000);
    } catch (err) {
      console.log(err);
    } finally {
      setGeneratingStory(false);
    }
  };

  useEffect(() => {
    getRhymes();
  }, []);

  const setRhymes = async (rhymes: Rhymes[]) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/rhymes`, {
        email: "student@gmail.com",
        rhymess: rhymes,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGenerateSong = async () => {
    setGeneratingStory(true);
    try {
      const { data } = await axios.post(`http://localhost:3001/api/generate`, {
        prompt: input,
        make_instrumental: false,
        wait_audio: false,
      });

      const songId = data[0].id;
      songId && setGeneratedIds(songId);
      getSong(songId);
    } catch (err) {
      console.log(err);
      setGeneratingStory(false);
    }
  };

  const getSong = async (songId: string) => {
    try {
      const { data } = await axios.get(` `);

      if (data[0].status !== "complete") {
        setTimeout(() => {
          getSong(songId);
        }, 3000);
        return;
      }

      const url = data[0]?.video_url;
      const prompt = data[0].gpt_description_prompt;
      url && setUrl(url);
      const updatedRhymes = [{ id: songId, title: prompt, video_url: url }];
      setOlds([]);
      await setRhymes(updatedRhymes);
      // await getRhymes();
      window.location.href = "/generate-rhym?resulted=true";
    } catch (err) {
      console.log(err);
      getSong(songId);
      // setGeneratingStory(false);
    }
  };

  // useEffect(() => {
  //   // Play the last video added when URL is updated
  //   setTimeout(() => {
  //     if (url && videoRef.current) {
  //       videoRef.current.load(); // Reload the video to ensure it picks up the new source
  //       videoRef.current.addEventListener("canplay", () => {
  //         videoRef.current?.play(); // Play the video when it's ready
  //       });
  //     }
  //   }, 3000);
  // }, [url]);

  return (
    <main className="p-5 flex flex-col gap-2 bg min-h-screen ">
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

      <div className="flex gap-4 items-center ">
        <div
          onClick={() => router.push("/dashboard")}
          className="bg-priClr text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-3 py-2 rounde-md shadow-black shadow-sm font-semibold"
        >
          <BiChevronLeft className="text-3xl " />
        </div>
        <input
          placeholder="Enter Prompt"
          className={
            "p-4 border-2 border-priClr bg-white  boxShadow outline-0 w-full"
          }
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleGenerateSong();
            }
          }}
          value={input}
        />
        <button
          disabled={!input}
          onClick={() => {
            handleGenerateSong();
          }}
          className={`w-1/5 cursor-pointer bg-priClr grid content-center boxShadow py-3`}
        >
          <p className="text-white font-black tracking-widest">Generate Rhym</p>
        </button>
      </div>

      {/* Result Rhymes */}
      {isResulted && old.length > 0 && (
        <>
          <h3 className="text-xl font-semibold py-6">Result</h3>
          <div className="grid grid-cols-3 gap-10 items-center">
            <div></div>
            <div
              key={old[old.length - 1].video_url}
              className="p-4 boxShadow flex flex-col gap-4 bg-white border-2 border-priClr"
            >
              <h4 className="text-lg font-semibold">
                {old[old.length - 1].title}
              </h4>
              <video ref={videoRef} controls>
                <source src={old[old.length - 1].video_url} type="video/mp4" />
              </video>
            </div>
          </div>
        </>
      )}

      {/* Previous Rhymes */}
      <h3 className="text-xl font-semibold py-6">Previous Rhymes</h3>
      <div className="grid grid-cols-3 gap-10 items-center">
        {lists.map((list, index) => (
          <div
            key={index}
            className="p-4 boxShadow flex flex-col gap-4 bg-white border-2 border-priClr"
          >
            <h4 className="text-lg font-semibold">{list.title}</h4>
            <video controls>
              <source src={list.video_url} type="video/mp4" />
            </video>
          </div>
        ))}
        {old.map((ol, index) => (
          <div
            key={ol.video_url}
            className="p-4 boxShadow flex flex-col gap-4 bg-white border-2 border-priClr"
          >
            <h4 className="text-lg font-semibold">{ol.title}</h4>
            <video ref={index === old.length - 1 ? videoRef : null} controls>
              <source src={ol.video_url} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GenerateRhym;
