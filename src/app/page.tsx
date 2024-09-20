"use client";

import HomeBG from "@/components/HomeBG";
import HomeContent from "@/components/HomeContent";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUser from "@/store/useUser";
import COMIC from "@/assets/ComicSpread-removebg-preview.png";
import RHYM from "@/assets/rhyme3.png";
import NARR from "@/assets/story-narr3.png";
import Link from "next/link";

export default function Home() {
  const setUser = useUser((state) => state.setUser);
  const setRole = useUser((state) => state.setRole);

  useEffect(() => {
    const details = localStorage.getItem("ai-assessment");
    if (details) {
      setUser(JSON.parse(details));
      setRole(JSON.parse(details).role);
    }
  }, []);

  return (
    <>
      <HomeBG>
        <HomeContent />
      </HomeBG>
      {/* Comic , Rhyms Gen */}
      <section
        id="#craft"
        className="border-t-4 border-black flex flex-col gap-8"
      >
        <h1 className="text-5xl w-max mx-auto font-bold mt-10">Features</h1>
        {/* ##### COMIC ####### */}
        <div className="flex gap-14 justify-between w-7/12 mx-auto mt-6 items-start">
          {/* LEFT */}
          <div className="relative w-[28rem] h-96 shrink-0">
            <Image alt="" src={COMIC} fill />
          </div>
          {/* RIGHT */}
          <div className="flex gap-2 items-start justify-start flex-col">
            <h3 className="font-bold text-4xl text-shadow text-priClr">
              Comic Generator
            </h3>
            <p className="shrink-1 text-lg">
              Create your own visual stories with the Comic Generator, where you
              can design characters, plot scenes, and craft engaging comic
              strips, all with the help of AI. Bring your creativity to life,
              panel by panel.
            </p>
            <Link
              href={"/generate-comic"}
              className="bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-7 py-3 rounde-md shadow-black shadow-sm font-semibold"
            >
              <p className="font-bold">Explore</p>
            </Link>
          </div>
        </div>
        {/* ##### RHYME ####### */}
        <div className="flex gap-14 justify-between w-7/12 mx-auto mt-6 items-start">
          {/* LEFT */}
          <div className="flex gap-2 items-start justify-start flex-col">
            <h3 className="font-bold text-4xl text-shadow text-priClr">
              Rhymes Generator
            </h3>
            <p className="shrink-1 text-lg">
              Find the perfect rhyme for your poems, songs, or stories with the
              Rhymes Generator. Powered by AI, it offers creative and rhythmic
              word pairings to enhance your lyrical creations effortlessly.
            </p>
            <Link
              href={"/generate-rhym"}
              className="bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-7 py-3 rounde-md shadow-black shadow-sm font-semibold"
            >
              <p className="font-bold">Explore</p>
            </Link>
          </div>
          {/* RIGHT */}
          <div className="relative w-[28rem] h-96 shrink-0">
            <Image alt="" src={RHYM} fill />
          </div>
        </div>
        {/* ##### STORY NARRATOR ####### */}
        <div className="flex gap-14 justify-between w-7/12 mx-auto mt-6 items-start">
          {/* LEFT */}
          <div className=" shrink-0">
            <Image alt="" src={NARR} />
          </div>
          {/* RIGHT */}
          <div className="flex gap-2 items-start justify-center flex-col">
            <h3 className="font-bold text-4xl text-shadow text-priClr">
              Story Narrator
            </h3>
            <p className="shrink-1 text-lg">
              Story Narrator brings your tales to life with captivating voice
              narration. Whether it's a bedtime story or a grand adventure, the
              AI-powered narrator adds emotion and depth, creating an immersive
              listening experience.
            </p>
            <Link
              href={"/"}
              className="bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-7 py-3 rounde-md shadow-black shadow-sm font-semibold"
            >
              <p className="font-bold">Explore</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
