"use client";

import useQuizz from "@/store/useQuiz";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";

const trueOrFalse = {
  internal: [
    [
      "generate 1 True or False question about solar system with question and answer",
      "Question: The planet Jupiter is the largest planet in our solar system. Answer: True.",
    ],
  ],
  visible: [
    [
      "generate 1 True or False question about solar system with question and answer",
      "Question: The planet Jupiter is the largest planet in our solar system. Answer: True.",
    ],
  ],
};

const mcq = {
  internal: [
    [
      "generate 1 MCQ question about machine learning with question, options and answer in JSON format",
      `Sure! Here is another generated MCQ question about machine learning:
    Question: What is the term used to describe a model that has been trained on a dataset but has not yet been deployed?
    
    Options:
    A) Training data
    B) Testing data
    C) Training model
    D) Deployment model
    Answer: C) Training model`,
    ],
  ],
  visible: [
    [
      "generate 1 MCQ question about machine learning with question, options and answer in JSON format",
      `Sure! Here is another generated MCQ question about machine learning:
Question: What is the term used to describe a model that has been trained on a dataset but has not yet been deployed?

Options:
A) Training data
B) Testing data
C) Training model
D) Deployment model
Answer: C) Training model`,
    ],
  ],
};

const Quizz = ({ page }: { page: string }) => {
  const {
    isEnd,
    isStart,
    ques,
    quesNo,
    score,
    selectedLevel,
    selectedType,
    setIsEnd,
    setIsStart,
    setQues,
    setQuesNo,
    setScore,
    setSelectedLevel,
    setSelectedType,
    setShowQuiz,
    showQuiz,
  } = useQuizz();

  const route = useRouter();

  const [history, setHistory] = useState<{
    internal: string[][];
    visible: string[][];
  }>();
  const [currQues, setCurrQues] = useState({
    question: "2 + 2 ",
    options: ["3", "4", "5", "6"],
    answer: "4",
  });
  const [loading, setLoading] = useState(false);
  const [ans, setAns] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [feedback, setFeedback] = useState("");

  const [percentage, setPercentage] = useState(0);
  const [isPass, setIsPass] = useState(false);

  const calculatePercentage = () => {
    const percentage = Math.ceil((score / quesNo) * 100);
    setPercentage(percentage);
    percentage >= 60 ? setIsPass(true) : setIsPass(false);
  };

  const reset = () => {
    setShowQuiz(false);
    setIsStart(false);
    setIsEnd(false);
    setQuesNo(0);
    setScore(0);
    setFeedback("");
  };

  const handleParseQuestion = (ques: string) => {
    selectedType == "tf" &&
      setCurrQues({
        question: ques.split("Question:")[1].split(".")[0],
        options: ["True", "False"],
        answer: ques.split("Question:")[1].split("Answer:")[1].split(".")[0],
      });
    selectedType == "mcq" &&
      setCurrQues({
        question: ques
          .split("Question:")[1]
          .split("?")[0]
          .replace(/\\n/g, "\n")
          .replace(/&#x27;/g, "'"),
        options: ques
          .split("Question:")[1]
          .split("Options:")[1]
          .split("Answer:")[0]
          .split("\n")
          .map((opt) => opt.trim()),
        answer: ques
          .split("Question:")[1]
          .split("Options:")[1]
          .split("Answer:")[1]
          .split(".")[0]
          .split("Would")[0]
          .split("You")[0]
          .split("Please")[0]
          .replace(/\\n/g, "\n")
          .replace(/&#x27;/g, "'"),
      });
  };

  const handleBegin = async () => {
    setIsStart(true);
    setLoading(true);
    setAns("");
    setIsSubmit(false);
    setQuesNo(quesNo + 1);
    try {
      const { data } = await axios.post(`http://localhost:5000/api/v1/chat`, {
        user_input:
          selectedType === "mcq"
            ? `generate another 1 MCQ question about ${ques} in JSON format`
            : `generate another 1 True or Flase question about ${ques} in JSON format`,
        temperature: 0.8,
        history,
      });
      setHistory(data.results[0].history);
      handleParseQuestion(
        data.results[0].history.visible[
          data.results[0].history.visible.length - 1
        ][1]
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedback = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`http://localhost:5000/api/v1/chat`, {
        user_input: `can you provide me a feedback on how can I improve, as I scored ${score} out of ${quesNo} in test about ${ques}?`,
      });
      setFeedback(
        data.results[0].history.visible[
          data.results[0].history.visible.length - 1
        ][1]
          .split("Of course!")[1]
          .replace(/\\n/g, "\n")
          .replace(/&#x27;/g, "'")
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    selectedType === "mcq"
      ? setHistory(mcq)
      : selectedType === "tf" && setHistory(trueOrFalse);
  }, [selectedType]);

  return (
    <main
      className={`bg-gray-100 left-0 w-full top-0 h-full z-10 absolute dark:bg-gray-800 flex  transition-transform  flex-col py-10 `}
    >
      {/* Backdrop */}
      <h1 className="font-black select-none text-priClr/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28rem]">
        Q<span className="text-[22rem]">u</span>
        <span className="text-[20rem]">i</span>
        <span className="text-[18rem]">z</span>
        <span className="text-[18rem]">z</span>
        <span className="text-[16rem]">z</span>
        <span className="text-[16rem]">z</span>
      </h1>
      {/* Chooooses */}
      {!isStart && (
        <div
          className={`flex flex-col justify-around h-full ${
            isStart ? "opacity-0" : "opacity-100"
          } transition-all `}
        >
          {/*          Quizzz Types           */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-priClr text-3xl text-center ">
              Quizzz is about?
            </p>
            <div className="flex gap-6 items-end w-full z-10 mx-auto  text-center justify-center ">
              {/* Go Back to Chat */}

              {/*  */}

              <div className="flex flex-col gap-1  ">
                <input
                  value={ques}
                  onChange={(e) => setQues(e.target.value)}
                  type="text"
                  className="p-4 border-2 border-priClr bg-white boxShadow outline-0 w-96"
                  placeholder="What Is The Quizz About?"
                />
              </div>
            </div>
          </div>
          {/* Type */}
          <div className="mx-auto text-center flex flex-col gap-4 z-10">
            <p className="font-semibold text-priClr text-3xl">Quizzz Type?</p>
            <div className="flex gap-12 items-center">
              <button
                onClick={() => setSelectedType("mcq")}
                className={`px-8 py-3 w-max   ${
                  selectedType === "mcq"
                    ? "bg-priClr text-white border-2 border-black boxShadow"
                    : "text-priClr bg-white border-2 border-priClr"
                } font-bold   `}
              >
                {`MCQ`}
              </button>
              <button
                onClick={() => setSelectedType("tf")}
                className={`px-8 py-3 w-max   ${
                  selectedType === "tf"
                    ? "bg-priClr text-white border-2 border-black boxShadow"
                    : "text-priClr bg-white border-2 border-priClr"
                } font-bold`}
              >
                {`True Or False`}
              </button>
              {/* <button
                onClick={() => setSelectedType("short")}
                className={`px-8 py-3 w-max   ${
                  selectedType === "short"
                    ? "bg-priClr text-white border-2 border-black boxShadow"
                    : "text-priClr bg-white border-2 border-priClr"
                } font-bold`}
              >
                {`Short Answers`}
              </button> */}
            </div>
          </div>
          {/* Level */}
          <div className="mx-auto text-center flex flex-col gap-4 z-10">
            <p className="font-semibold text-priClr text-3xl">Quizzz Level?</p>
            <div className="flex gap-12 items-center">
              <button
                onClick={() => setSelectedLevel("begin")}
                className={`px-8 py-3 w-max   ${
                  selectedLevel === "begin"
                    ? "bg-priClr text-white border-2 border-black boxShadow"
                    : "text-priClr bg-white border-2 border-priClr"
                } font-bold`}
              >
                {`Beginner`}
              </button>
              <button
                onClick={() => setSelectedLevel("inter")}
                className={`px-8 py-3 w-max   ${
                  selectedLevel === "inter"
                    ? "bg-priClr text-white border-2 border-black boxShadow"
                    : "text-priClr bg-white border-2 border-priClr"
                } font-bold`}
              >
                {`Intermediate`}
              </button>
              <button
                onClick={() => setSelectedLevel("advance")}
                className={`px-8 py-3 w-max   ${
                  selectedLevel === "advance"
                    ? "bg-priClr text-white border-2 border-black boxShadow"
                    : "text-priClr bg-white border-2 border-priClr"
                } font-bold`}
              >
                {`Advanced`}
              </button>
            </div>
          </div>
          {/* Button */}
          <button
            onClick={handleBegin}
            className="px-20 py-4 z-10 bg-priClr border-2 border-black boxShadow text-white   font-bold w-max mx-auto "
          >
            Begin Quizzz
          </button>
        </div>
      )}
      {/* Questions */}
      {isStart && !isEnd && (
        <div
          className={`${
            isStart ? "opacity-100" : "opacity-0"
          } transition-all flex flex-col justify-around h-full z-10 `}
        >
          {/* Ques/ Opt... */}
          {!loading ? (
            <div className="w-1/2 mx-auto flex flex-col gap-8">
              {/* Ques */}
              <h1 className="bg-priClr boxShadow p-4 text-white border-2  border-black   font-bold text-2xl ">
                {`${currQues.question} ?`}
              </h1>
              {/* Opts */}
              <div className="grid grid-cols-2 gap-4">
                {currQues.options.map((opt, i) =>
                  opt ? (
                    <button
                      onClick={() => !isSubmit && setAns(opt.trim())}
                      className={`p-4 text-xl font-bold shadow-md ${
                        ans === opt
                          ? "bg-priClr boxShadow text-white border-2 border-black boxShadow"
                          : "bg-white hover:bg-gray-100 border-2 border-priClr text-priClr"
                      }     hover:scale-95  transition-all `}
                      key={i}
                    >
                      {opt}
                    </button>
                  ) : (
                    <></>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white p-3 px-10 border-2 border-priClr boxShadow font-semibold w-max mx-auto ">
              <FaGear className="animate-spin text-3xl w-max mx-auto " />
              <h1 className="text-xl my-3">Generating...</h1>
            </div>
          )}
          {isSubmit && (
            <div className="p-3 shadow-md bg-white boxShadow w-max mx-auto">
              {/* Result Gif */}
              <div className="w-40 h-40 relative mx-auto">
                <Image
                  fill
                  src={
                    ans.trim() === currQues.answer.trim()
                      ? "/correct.gif"
                      : "/wrong.gif"
                  }
                  alt="Result"
                />
              </div>
              {/* Result */}
              <div
                className={` text-center font-semibold boxShadow text-white p-3 ${
                  ans.trim() === currQues.answer.trim()
                    ? "bg-emerald-500"
                    : "bg-red-500"
                } `}
              >
                {ans.trim() === currQues.answer.trim()
                  ? "Correct"
                  : `Wrong, Correct Answer: ${currQues.answer}`}
              </div>
            </div>
          )}
          {!loading && (
            <div className="flex gap-4 items-center w-1/2 mx-auto ">
              <button
                onClick={() => {
                  setIsSubmit(true);
                  setScore(
                    ans.trim() === currQues.answer.trim() ? score + 1 : score
                  );
                }}
                className="px-20 py-3 z-10 bg-priClr boxShadow text-white border-2 border-black  font-bold w-max mx-auto "
              >
                Submit Answer
              </button>
              <button
                disabled={isSubmit ? false : true}
                onClick={isSubmit ? handleBegin : () => null}
                className={`${
                  isSubmit ? "bg-priClr" : "bg-gray-300"
                } px-20 py-3 z-10  text-white border-2 border-black boxShadow boxShadow  font-bold w-max mx-auto `}
              >
                Next Question
              </button>
              {(page === "roadmap" || page === "chat") && (
                <button
                  onClick={() => {
                    setIsEnd(true);
                    calculatePercentage();
                  }}
                  className="px-20 py-3 z-10 bg-priClr text-white border-2 border-black boxShadow boxShadow  font-bold w-max mx-auto "
                >
                  {`End Quizz`}
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Result */}
      {isEnd && (
        <div className="flex flex-col gap-4 justify-around h-full w-1/2 mx-auto z-10">
          <div className="w-full flex flex-col gap-6 items-center">
            <h1 className="text-3xl font-bold bg-white border-2 border-priClr boxShadow w-full text-center py-3">
              You Scored
            </h1>

            <div className="grid grid-cols-2 gap-6 w-full">
              {/* Score */}
              <div className=" px-10  z-10 items-center p-6 flex flex-col gap-6 bg-priClr border-2 border-black text-white boxShadow justify-center ">
                <p className="text-5xl font-semibold ">{`${score} / ${quesNo}`}</p>
              </div>
              {/* Percentage */}
              <div
                className={` px-10  z-10 items-center p-6 flex flex-col gap-6  ${
                  isPass ? "bg-emerald-700" : "bg-red-700"
                } border-2 border-black text-white boxShadow justify-center `}
              >
                <p className="text-5xl font-semibold ">{`${percentage}%`}</p>
              </div>
            </div>
            {/* Test Result */}
            <h1 className="text-xl font-bold bg-white border-2 border-priClr boxShadow w-full text-center py-3">
              {isPass
                ? `Congratulations !! 🎉🎉🥳🥳, You have Successfully Completed Your Test About ${ques}. Now, Continue Your Learning Journey 🗺️🚀 `
                : `Sorry, You Don't Have Enough Percentage. Learn More & Try Again 💪🏻`}
            </h1>
          </div>
          {/* Feedback */}
          {feedback && !loading && (
            <div className="w-full p-6 border-2 border-priClr boxShadow mx-auto bg-white z-10 flex flex-col gap-3 ">
              <h1 className="font-semibold text-center text-2xl">Feedback</h1>
              <p>{feedback}</p>
            </div>
          )}
          {/* Loading */}
          {loading && (
            <div className="bg-white p-3 px-10 border-2 border-priClr boxShadow font-semibold w-max mx-auto ">
              <FaGear className="animate-spin text-3xl w-max mx-auto " />
              <h1 className="text-xl my-3">Getting Feedback...</h1>
            </div>
          )}

          {/* Btns */}
          <div className="flex gap-6 mx-auto items-center">
            <button
              onClick={() => {
                handleFeedback();
              }}
              className="px-20 py-3 z-10 bg-priClr text-white border-2 border-black boxShadow   font-bold w-max mx-auto "
            >
              {`Get Feedback`}
            </button>
            {page == "chat" ? (
              <button
                onClick={() => reset()}
                className="px-20 py-3 z-10 bg-priClr text-white border-2 border-black boxShadow   font-bold w-max mx-auto "
              >
                {`Go to Quizz`}
              </button>
            ) : (
              <button
                onClick={() => {
                  reset();
                  route.back();
                }}
                className="px-20 py-3 z-10 bg-priClr text-white border-2 border-black boxShadow   font-bold w-max mx-auto "
              >
                {`Go to Learning Path`}
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Quizz;
