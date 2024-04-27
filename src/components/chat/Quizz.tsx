"use client";

import useQuizz from "@/store/useQuiz";
import useToast from "@/store/useToast";
import useUser from "@/store/useUser";
import { gemini } from "@/utils/chat/geminiAPI";
import { geminiFeedback } from "@/utils/chat/geminiFeedbackAPI";
import { useSpeechSynthesis } from "@/utils/texttospeech/TextToSpeech";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { v4 } from "uuid";

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
  const params = useParams();
  const role = useUser((state) => state.role);
  const staffName = useUser((state) => state.user?.userName);

  const route = useRouter();
  const [history, setHistory] = useState<{
    internal: string[][];
    visible: string[][];
  }>();
  const setToast = useToast((state) => state.setToast);
  const [isParsed, setIsParsed] = useState(true);
  const [currQnIndex, setCurrQnIndex] = useState(0);
  const [ansWithQns, setAnsWithQns] = useState<QuestionWithAnsType[]>([]);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ans, setAns] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(false);

  const [speaking, setSpeaking] = useState(false);
  const { speak, stopSpeaking } = useSpeechSynthesis(speaking, setSpeaking);

  const [feedback, setFeedback] = useState<null | {
    areas_to_improve: string[];
    guidance: string[];
    strengths: string[];
    weaknesses: string[];
    encouragement: string;
  }>(null);

  const [percentage, setPercentage] = useState(0);
  const [isPass, setIsPass] = useState(false);

  const calculatePercentage = () => {
    const percentage = Math.ceil((score / (currQnIndex + 1)) * 100);
    setPercentage(percentage);
    percentage >= 60 ? setIsPass(true) : setIsPass(false);
  };

  const getStaffAssess = async (id: string) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/teacher/getdatabyid`,
        {
          id: id,
        }
      );
      if (data) {
        setQuestions(JSON.parse(data.questions));
      }
    } catch (e) {
      setToast({ msg: "error", variant: "error" });
    }
  };

  useEffect(() => {
    if (params.id != "none") {
      console.log("not none");

      setIsStart(true);
      getStaffAssess(params.id as string);
    }
    console.log("exit");

    return () => reset();
  }, []);

  const reset = () => {
    setShowQuiz(false);
    setIsStart(false);
    setIsEnd(false);
    setQuesNo(0);
    setScore(0);
    setFeedback(null);
    setAnsWithQns([]);
  };

  console.log(feedback);

  useEffect(() => {
    console.log(role);

    if (role == "staff") {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [isStart]);

  const handleParseQuestion = (ques: string) => {
    selectedType == "tf" &&
      setQuestions((prev) => [
        ...prev,
        {
          question: ques.split("Question:")[1].split(".")[0],
          options: ["True", "False"],
          answer: ques.split("Question:")[1].split("Answer:")[1].split(".")[0],
        },
      ]);
    selectedType == "mcq" &&
      setQuestions((prev) => [
        ...prev,
        {
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
        },
      ]);
  };

  console.log(feedback);

  const handleBegin = async () => {
    setIsStart(true);
    setLoading(true);
    setAns("");
    setIsSubmit(false);
    setQuesNo(quesNo + 1);
    try {
      // const { data } = await axios.post(`http://localhost:5000/api/v1/chat`, {
      //   user_input:
      //     selectedType === "mcq"
      //       ? `generate another 1 MCQ question about ${ques} in JSON format`
      //       : `generate another 1 True or Flase question about ${ques} in JSON format`,
      //   temperature: 0.8,
      //   history,
      // });
      // setHistory(data.results[0].history);
      // handleParseQuestion(
      //   data.results[0].history.visible[
      //     data.results[0].history.visible.length - 1
      //   ][1]
      // );
      const ans = await gemini(ques, selectedLevel);

      if (ans) {
        setIsParsed(true);
        setQuestions(ans);
      } else {
        setIsParsed(false);
        setIsStart(false);
        setToast({ msg: "Parse Failed, Please Try Again", variant: "error" });
      }
    } catch (e) {
      console.log(e);
      setIsStart(false);
      setIsParsed(false);
      setToast({ msg: "Parse Failed, Please Try Again", variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  const storeChanges = async () => {
    try {
      setIsStart(false);
      setUploadStatus(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/teacher/questions`,
        {
          data: {
            topic: ques,
            staffName: staffName,
            difficulty: selectedLevel,
            questions: JSON.stringify(questions),
          },
        }
      );
      setUploadStatus(false);
      setToast({ msg: "Created", variant: "success" });
      route.replace("/dashboard");
    } catch (e) {
      setToast({ msg: "error", variant: "error" });
    }

    // setIsEnd(true);
  };

  const handleFeedback = async () => {
    try {
      setLoading(true);
      console.log("feedback");
      const feedback = await geminiFeedback(
        score,
        ques,
        JSON.stringify(ansWithQns)
      );
      if ("length" in feedback) {
        setFeedback(feedback[0]);
      } else {
        setFeedback(feedback);
      }
      setIsEnd(true);
      return;
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(ansWithQns);
  }, [ansWithQns]);

  useEffect(() => {
    selectedType === "mcq"
      ? setHistory(mcq)
      : selectedType === "tf" && setHistory(trueOrFalse);
  }, [selectedType]);

  return (
    <main
      className={`bg-gray-100 left-0 bg  w-full top-0 min-h-screen z-10 absolute  flex  transition-transform gap-6 flex-col py-10 `}
    >
      {/* BACK */}
      <div className="flex gap-2 items-center px-10">
        {!isStart && (
          <Link
            href={"/dashboard"}
            className="bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-3 py-2 rounde-md shadow-black shadow-sm font-semibold"
          >
            <BiChevronLeft className="text-3xl " />
          </Link>
        )}
        <h4 className="text-2xl font-medium px-4 py-2 bg-white boxShadow w-max border-[3px] border-priClr ">
          {role === "staff" ? `Validate Assessment` : "Take Assessment"}
        </h4>
      </div>
      {/* Chooooses */}
      {!isStart && (
        <div
          className={`flex flex-col w-4/12 bg-white px-10 py-8  gap-6 boxShadow border-[3px] border-priClr mx-auto justify-around h-full ${
            isStart ? "opacity-0" : "opacity-100"
          } transition-all `}
        >
          {/*          Quizzz Types           */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-priClr  text-3xl text-left ">
              Assessment Is About
            </p>
            <div className="flex gap-6  w-full z-10  text-center  ">
              <div className="flex flex-col gap-1 w-full  ">
                <input
                  onKeyUp={(e) => e.key == "Enter" && handleBegin()}
                  value={ques}
                  onChange={(e) => setQues(e.target.value)}
                  type="text"
                  className="p-4 border-2 border-priClr bg-white  boxShadow outline-0 w-full"
                  placeholder="Eg: Solar System"
                />
              </div>
            </div>
          </div>
          {/* Type */}
          {/* <div className="mx-auto text-center flex flex-col gap-4 z-10">
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
              <button
                onClick={() => setSelectedType("short")}
                className={`px-8 py-3 w-max   ${
                  selectedType === "short"
                    ? "bg-priClr text-white border-2 border-black boxShadow"
                    : "text-priClr bg-white border-2 border-priClr"
                } font-bold`}
              >
                {`Short Answers`}
              </button>
            </div>
          </div> */}
          {/* Level */}
          <div className="  flex flex-col gap-4 z-10">
            <p className="font-semibold text-priClr text-3xl">
              Difficulty Level
            </p>
            <div className="grid grid-cols-1 gap-6   items-start">
              <button
                onClick={() => setSelectedLevel("easy")}
                className={`px-8 py-3   ${
                  selectedLevel === "easy"
                    ? "bg-priClr text-white border-2 border-black boxShadow"
                    : "text-priClr bg-white border-2 border-priClr"
                } font-bold`}
              >
                {`Easy`}
              </button>
              <button
                onClick={() => setSelectedLevel("medium")}
                className={`px-8 py-3   ${
                  selectedLevel === "medium"
                    ? "bg-priClr text-white border-2 border-black boxShadow"
                    : "text-priClr bg-white border-2 border-priClr"
                } font-bold`}
              >
                {`Medium`}
              </button>
              <button
                onClick={() => setSelectedLevel("hard")}
                className={`px-8 py-3   ${
                  selectedLevel === "hard"
                    ? "bg-priClr text-white border-2 border-black boxShadow"
                    : "text-priClr bg-white border-2 border-priClr"
                } font-bold`}
              >
                {`Hard`}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleBegin}
            className="px-20 py-3 z-10 bg-priClr border-2 border-black boxShadow text-white   font-bold w-full mx-auto "
          >
            {role === "staff" ? "Validate Assessment" : "Begin Assessment"}
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
          {!loading && questions.length ? (
            <div className="w-1/2 mx-auto flex flex-col gap-8">
              <div className="flex gap-3 items-center ">
                <button
                  onClick={() => {
                    speak(`Question: ${questions[currQnIndex].question}
                  and the Options are ${questions[currQnIndex].options[0]}, ${questions[currQnIndex].options[1]}, ${questions[currQnIndex].options[2]}, ${questions[currQnIndex].options[3]},
                  `);
                  }}
                >
                  {speaking ? (
                    <HiSpeakerXMark className="text-2xl" />
                  ) : (
                    <HiSpeakerWave className="text-2xl" />
                  )}
                </button>
                {/* Ques */}
                <input
                  disabled={!isEdit}
                  onChange={(e) => {
                    setQuestions((prev) => {
                      const newQn = [...prev];
                      newQn[currQnIndex].question = e.target.value;
                      return newQn;
                    });
                  }}
                  value={questions[currQnIndex]?.question}
                  className={`${
                    isEdit ? "!cursor-text" : ""
                  } bg-priClr boxShadow w-full text-wrap whitespace-break-spaces  p-4 text-white border-2  border-black   font-bold text-2xl `}
                >
                  {/* {`${questions[currQnIndex]?.question} ?`} */}
                </input>
              </div>
              {/* Opts */}
              <div className="grid grid-cols-2 gap-4">
                {questions[currQnIndex].options?.map((opt, i) =>
                  opt ? (
                    isEdit ? (
                      <div key={i} className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          onClick={() => {
                            setQuestions((prev) => {
                              const newQn = [...prev];
                              newQn[currQnIndex].answer = opt;
                              return newQn;
                            });
                          }}
                          checked={questions[currQnIndex].answer === opt}
                          className="w-8 h-8 accent-emerald-600 "
                        />
                        <input
                          disabled={!isEdit}
                          onChange={(e) => {
                            setQuestions((prev) => {
                              const newQn = [...prev];
                              newQn[currQnIndex].options[i] =
                                e.target.value || " ";
                              return newQn;
                            });
                          }}
                          value={opt}
                          className={`w-fit p-4 text-xl font-bold shadow-md ${
                            ans === opt
                              ? "bg-priClr boxShadow text-white border-2 border-black boxShadow"
                              : "bg-white hover:bg-gray-100 border-2 border-priClr text-priClr"
                          }     `}
                          // key={i}
                        ></input>
                      </div>
                    ) : (
                      <div
                        onClick={() => !isSubmit && setAns(opt.trim())}
                        className={` p-4 text-xl text-left font-bold shadow-md ${
                          ans === opt
                            ? "bg-priClr boxShadow text-white border-2 border-black boxShadow"
                            : "bg-white hover:bg-gray-100 border-2 border-priClr text-priClr"
                        }     hover:scale-95 transition-all flex flex-col gap-2 `}
                        key={i}
                      >
                        <OptImage key={opt} input={`${opt} from ${ques}`} />
                        <p className="text-center">{opt}</p>
                      </div>
                    )
                  ) : (
                    <></>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white p-3 mt-4 px-10 border-2 border-priClr boxShadow font-semibold w-max mx-auto ">
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
                    ans.trim() === questions[currQnIndex].answer.trim()
                      ? "/correct.gif"
                      : "/wrong.gif"
                  }
                  alt="Result"
                />
              </div>
              {/* Result */}
              <div
                className={` text-center font-semibold boxShadow text-white p-3 ${
                  ans.trim() === questions[currQnIndex].answer.trim()
                    ? "bg-emerald-500"
                    : "bg-red-500"
                } `}
              >
                {ans.trim() === questions[currQnIndex].answer.trim()
                  ? "Correct"
                  : `Wrong, Correct Answer: ${questions[currQnIndex].answer}`}
              </div>
            </div>
          )}
          {!loading &&
            (!isEdit ? (
              <div className="flex gap-4 mt-4 items-center w-1/2 mx-auto ">
                <button
                  onClick={() => {
                    setIsSubmit(true);
                    setScore(
                      ans.trim() === questions[currQnIndex].answer.trim()
                        ? score + 1
                        : score
                    );
                    setAnsWithQns((prev) => [
                      ...prev,
                      {
                        question: questions[currQnIndex].question,
                        answer: ans.trim(),
                        correct: questions[currQnIndex].answer.trim(),
                      },
                    ]);
                  }}
                  className="px-20 py-3 z-10 bg-priClr boxShadow text-white border-2 border-black  font-bold w-max mx-auto "
                >
                  Submit Answer
                </button>
                <button
                  disabled={isSubmit ? false : true}
                  onClick={
                    isSubmit
                      ? () => {
                          if (questions.length <= currQnIndex + 1)
                            return handleFeedback();
                          setLoading(false);
                          setIsSubmit(false);
                          setAns("");
                          setCurrQnIndex((prev) => prev + 1);
                        }
                      : () => null
                  }
                  className={`${
                    isSubmit ? "bg-priClr" : "bg-priClr/20"
                  } px-20 py-3 z-10  text-white border-2 border-black boxShadow boxShadow  font-bold w-max mx-auto `}
                >
                  Next Question
                </button>
                {(page === "roadmap" || page === "chat") && (
                  <button
                    onClick={() => {
                      setIsEnd(true);
                      calculatePercentage();
                      handleFeedback();
                    }}
                    className="px-20 py-3 z-10 bg-priClr text-white border-2 border-black boxShadow boxShadow  font-bold w-max mx-auto "
                  >
                    {`End Quizz`}
                  </button>
                )}
              </div>
            ) : (
              <div className="flex gap-4 items-center mt-4 w-1/2 mx-auto ">
                <button
                  onClick={() => {
                    console.log("validate");

                    if (questions.length <= currQnIndex + 1) return;
                    setLoading(false);
                    setIsSubmit(false);
                    setAns("");
                    setCurrQnIndex((prev) => prev + 1);
                  }}
                  className={`bg-priClr px-20 py-3 z-10  text-white border-2 border-black boxShadow  font-bold w-max mx-auto `}
                >
                  Validate & Next Question
                </button>

                <button
                  onClick={storeChanges}
                  className="px-20 py-3 z-10 bg-priClr text-white border-2 border-black boxShadow boxShadow  font-bold w-max mx-auto "
                >
                  Save & Move To Dashboard
                </button>
              </div>
            ))}
          {/* Warning */}
          {params.id === "none" && (
            <p className="text-yellow-500 mx-auto max-w-[40%] text-center boxShadow px-5 py-1 mt-6 border-2 border-yellow-500 bg-white font-semibold">{`Caution: AI-generated questions may be inaccurate or misleading. Users can take validated assessments reviewed by staff to prevent such misleadings.`}</p>
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
                <p className="text-5xl font-semibold ">{`${score} / ${
                  currQnIndex + 1
                }`}</p>
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
              <h1 className="text-lg font-semibold">Areas to Improve</h1>
              <ul>
                {feedback["areas_to_improve"]?.map((point) => {
                  return (
                    <li key={v4()} className="list-item list-disc ml-10">
                      {point}
                    </li>
                  );
                })}
              </ul>
              <h1 className="font-semibold text-lg">Guidance</h1>
              <ul>
                {feedback["guidance"]?.map((point) => {
                  return (
                    <li key={v4()} className="list-item list-disc ml-10">
                      {point}
                    </li>
                  );
                })}
              </ul>
              <h1 className="font-semibold text-lg">Strengths</h1>
              <ul>
                {feedback["strengths"]?.map((point) => {
                  return (
                    <li key={v4()} className="list-item list-disc ml-10">
                      {point}
                    </li>
                  );
                })}
              </ul>
              <h1 className="font-semibold text-lg">Weakness</h1>
              <ul>
                {feedback["weaknesses"]?.map((point) => {
                  return (
                    <li key={v4()} className="list-item list-disc ml-10">
                      {point}
                    </li>
                  );
                })}
              </ul>
              <h1 className="font-semibold text-lg">Encouragement</h1>
              <ul>{<li className=" ml-10">{feedback["encouragement"]}</li>}</ul>
            </div>
          )}
          {/* Loading */}
          {loading && (
            <div className="bg-white p-3 px-10 border-2 border-priClr boxShadow font-semibold w-max mx-auto ">
              <FaGear className="animate-spin text-3xl w-max mx-auto " />
              <h1 className="text-xl my-3">Getting Feedback...</h1>
            </div>
          )}
          {uploadStatus && (
            <div className="bg-white p-3 px-10 border-2 border-priClr boxShadow font-semibold w-max mx-auto ">
              {/* <FaGear className="animate-spin text-3xl w-max mx-auto " /> */}
              <h1 className="text-xl my-3">Uploading...</h1>
            </div>
          )}

          {/* Btns */}
          <div className="flex gap-6 mx-auto items-center">
            {/* <button
              onClick={() => {
                handleFeedback();
              }}
              className="px-20 py-3 z-10 bg-priClr text-white border-2 border-black boxShadow   font-bold w-max mx-auto ">
              {`Get Feedback`}
            </button> */}
            {page == "chat" ? (
              <div className="flex gap-9">
                <button
                  onClick={() => reset()}
                  className="px-20 py-3 z-10 bg-priClr text-white border-2 border-black boxShadow   font-bold w-max mx-auto "
                >
                  {`Try More Assessments`}
                </button>
                <Link
                  href="/generate-comic"
                  className="px-20 py-3 z-10 bg-priClr text-white border-2 border-black boxShadow   font-bold w-max mx-auto "
                >
                  {`Connect with Comic`}
                </Link>
              </div>
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

const OptImage = ({ input }: { input: string }) => {
  const [img, setImg] = useState<Blob | undefined>(undefined);

  const getImage = async () => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify({ inputs: input }),
      }
    );
    const result = await response.blob();
    setImg(result);
    // return result;
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      {img ? (
        <div className="relative w-full h-36 object-cover mx-auto rounded-lg overflow-hidden">
          <Image
            alt="Image"
            className="object-cover "
            fill
            src={URL.createObjectURL(new File([img], "image"))}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
