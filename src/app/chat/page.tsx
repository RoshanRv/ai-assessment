"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { MdChecklist, MdFeedback, MdSummarize } from "react-icons/md";
import { BiSolidConversation } from "react-icons/bi";
import { RiSendPlane2Fill } from "react-icons/ri";
import { HfInference } from "@huggingface/inference";

import axios from "axios";
import Image from "next/image";
import Quizz from "@/components/chat/Quizz";
import useQuizz from "@/store/useQuiz";

type Props = {};

const Chat = (props: Props) => {
  const HF_ACCESS_TOKEN = "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";
  const inference = new HfInference(HF_ACCESS_TOKEN);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { showQuiz, setShowQuiz } = useQuizz();
  const placeholderRef = useRef<HTMLDivElement>(null);
  const sendRef = useRef<HTMLInputElement>(null);

  const ask = async () => {
    setInput("");
    const arr = [...chat];
    arr.push(input);
    setLoading(true);
    setError(false);
    axios
      .post("http://localhost:5000/api/v1/chat", {
        user_input: input,
      })
      .then((res) => {
        setChat((e) => [
          ...e,
          res.data.results[0].history.visible[
            res.data.results[0].history.visible.length - 1
          ][1],
        ]);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
        setChat((e) => [...e, "Sorry, Unable to process. Try Again"]);
      })
      .finally(() => setLoading(false));

    setChat(arr);
  };

  useEffect(() => {
    placeholderRef.current && placeholderRef.current.scrollIntoView(false);
  }, [chat]);

  const handleKeydown = (e: KeyboardEvent) => {
    e.key === "Enter" && input && ask();
  };

  useEffect(() => {
    sendRef.current &&
      sendRef.current.addEventListener("keydown", handleKeydown);

    return () =>
      sendRef?.current?.removeEventListener("keydown", handleKeydown);
  }, [input]);

  return (
    <>
      <div className=" h-screen flex flex-col justify-cente bg-gray-100 overflow-hidden relative pt-20  ">
        {/* BG Designs */}
        {/* <div className="w-[30rem] absolute top-[30%] left-[80%]  rotate-45  h-[50rem] bg-gradient-to-br from-priClr/60 to-secClr/60 rounded-tr-2xl  blur-3xl " />
        <div className="w-[30rem] absolute bottom-[30%] right-[80%]  rotate-45  h-[50rem] bg-gradient-to-br from-priClr/60 to-secClr/60 rounded-tr-2xl  blur-3xl " /> */}
        {/* --- BG Designs --- */}

        {/* Default Boxes */}
        {chat.length === 0 && (
          <div className="grid grid-cols-2 gap-12  w-7/12 m-auto ">
            <Card
              description="We've harnessed cutting-edge AI technology to craft concise
            summaries that distill the essence of complex content, saving you
            time and delivering clear insights."
              title="Summarization"
              icon={<MdSummarize className="text-3xl text-priClr " />}
            />
            <Card
              description="Explore our interactive Q&A feature that enhances your learning experience. Our AI-powered question and answer section empowers you to delve deeper into topics, providing clear explanations and insights."
              title="Question & Answering"
              icon={<BiSolidConversation className="text-3xl text-priClr " />}
            />
            <Card
              description="Engage in active learning with our MCQ and True/False tests! Test your knowledge and reinforce your understanding through our interactive quizzes."
              title="Quizzes"
              icon={<MdChecklist className="text-3xl text-priClr " />}
            />
            <Card
              description="Experience the value of instant feedback on your learning progress. We also provides immediate feedback on your answers."
              title="Instant Feedback"
              icon={<MdFeedback className="text-3xl text-priClr " />}
            />
          </div>
        )}
        {chat.length > 0 && (
          <div className="h-[70vh] relative z-10 overflow-y-auto w-full">
            {/* Chats */}
            {chat.map((cha, i) => (
              <div
                key={i}
                className={`flex ${
                  i % 2 == 0 ? "flex-row-reverse  " : "flex-row "
                } gap-6 mb-4 b w-6/12  mx-auto items-start `}
              >
                <Image
                  alt="img"
                  src={i % 2 == 0 ? "/face1.png" : "/logo.png"}
                  className="bg-white rounded-xl border-2 border-priClr"
                  width={70}
                  height={60}
                />
                <h1
                  className={`p-4 ${
                    i % 2 == 0
                      ? " rounded-l-2xl rounded-br-2xl "
                      : "rounded-r-2xl rounded-bl-2xl "
                  }    border-2 border-priClr bg-white shadow-lg `}
                >
                  {cha}
                </h1>
              </div>
            ))}
            {/* Placeholer Div */}
            <div ref={placeholderRef} />
            {/* // Loading */}
            {loading && (
              <div
                className={`flex gap-6 mb-4 b w-6/12  mx-auto items-start z-10 `}
              >
                <Image
                  alt="img"
                  src={"/logo.png"}
                  className="bg-white rounded-xl border-2 border-priClr"
                  width={70}
                  height={60}
                />
                <h1
                  className={`p-4 rounded-r-2xl rounded-bl-2xl 
              border-2 border-priClr bg-white shadow-lg `}
                >
                  {"Generating ..."}
                </h1>
              </div>
            )}
          </div>
        )}
        {/* Bottom Bar */}
        <div className="flex gap-10 items-center fixed bottom-10 justify-center w-full">
          {/* Quizz Button */}
          <button
            onClick={() => setShowQuiz(true)}
            className="px-8 py-3 w-max  text-white bg-priClr boxShadow font-bold"
          >
            Quizzz
          </button>
          {/* Input Field */}
          <div className="flex gap-4 items-center  p-4 border-2 border-priClr bg-white w-1/2 boxShadow     ">
            <input
              ref={sendRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full outline-0 text-sm"
            />
            <RiSendPlane2Fill onClick={ask} className="text-priClr text-2xl" />
          </div>
        </div>
        <Quizz page="chat" />
      </div>
    </>
  );
};

export default Chat;

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <div className="p-5 boxShadow flex flex-col gap-2  border-[3px] bg-white z-10 border-priClr   ">
      <div className="flex gap-2  items-center ">
        {icon}
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <p className="text-gray-600 text-sm font-normal ">{description}</p>
    </div>
  );
};
