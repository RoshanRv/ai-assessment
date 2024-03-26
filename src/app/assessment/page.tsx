"use client";

import { HfInference } from "@huggingface/inference";
import { ReactNode, useEffect, useRef, useState } from "react";

import Quizz from "@/components/chat/Quizz";
import useQuizz from "@/store/useQuiz";
import { zephyrQuery } from "@/utils/chat/zephyrLLM";
import axios from "axios";

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

  useEffect(() => {
    zephyrQuery({
      inputs: "generate a quiz about solar system in JSON format",
    }).then((response) => {
      console.log(JSON.stringify(response));
    });
  }, []);

  return (
    <>
      {/* Default Boxes */}

      <Quizz page="chat" />
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
