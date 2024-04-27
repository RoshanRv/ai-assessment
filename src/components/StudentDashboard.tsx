"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AIGEN from "@/assets/ai_gen.png";
import AILOGO from "@/assets/Hackfest-2023.png";
import RYHM from "@/assets/ryhm.jpg";
import Link from "next/link";
import axios from "axios";

type Props = {};

const StudentDashboard = (props: Props) => {
  const [assessments, setAssessments] = useState<AssessmentType[]>([]);

  const getAssessments = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/teacher/questions`
    );
    console.log(data);

    setAssessments(data.val);
  };
  useEffect(() => {
    getAssessments();
  }, []);
  return (
    <section className="p-6 px-10 min-h-[calc(100vh-4rem)] flex flex-col gap-6 bg">
      {/* Validated Assessments */}
      <>
        <h4 className="text-2xl font-medium px-4 py-2 bg-white boxShadow w-max border-[3px] border-priClr ">{`Staff Validated Assessments`}</h4>
        {assessments.length === 0 ? (
          <div className="boxShadow  justify-center items-center flex flex-col gap-y-6  border-[3px] bg-white z-10 border-priClr p-3 py-5 w-full">
            <div className="relative w-40 h-40 ">
              <Image
                fill
                alt=""
                src={`https://cdn-icons-png.freepik.com/512/7870/7870760.png`}
              />
            </div>
            <p className="text-xl font-medium">
              No Assessments Have Been Validated By Teacher
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6 items-center ">
            {assessments.map((assess) => (
              <Link
                href={`/assessment/${assess._id}`}
                // onClick={goToAssessment(assess._id)}
                className="p-3 flex flex-col gap-2 boxShadow border-[3px] bg-white  transition-all z-10 border-priClr"
              >
                <div className="flex gap-4 items-center ">
                  <h1 className="text-2xl font-semibold capitalize ">
                    {assess?.topic}
                  </h1>
                  {/* DIFFICULTY */}
                  <p className="text-xs px-4 py-0.5 rounded-sm capitalize text-white font-semibold  bg-priClr">
                    {assess?.difficulty}
                  </p>
                </div>
                <div className="flex justify-between items-center capitalize font-medium text-sm text-gray-400">
                  <p>{assess?.staffName}</p>
                  <p>{assess?.createdAt.split("T")[0]}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </>
      {/*  AI Generated Quiz */}
      <>
        <h4 className="text-2xl font-medium px-4 py-2 bg-white boxShadow w-max border-[3px] border-priClr ">{`AI Generated Assessments`}</h4>
        <div className="boxShadow  justify-center items-center flex flex-col gap-y-6  border-[3px] bg-white z-10 border-priClr p-3 py-5 w-full">
          <div className="relative w-[17%] ">
            <Image alt="" src={AIGEN} />
          </div>
          <Link
            href={"/assessment/none"}
            className="bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-7 py-3 rounde-md shadow-black shadow-sm font-semibold"
          >
            <p className="font-bold">Take AI Generated Assessments</p>
          </Link>
        </div>
      </>
      {/*  Generate Comic */}
      <>
        <h4 className="text-2xl font-medium px-4 py-2 bg-white boxShadow w-max border-[3px] border-priClr ">{`Generate Comic`}</h4>
        <div className="boxShadow  justify-center items-center flex flex-col gap-y-6  border-[3px] bg-white z-10 border-priClr p-3 py-5 w-full">
          <div className="relative w-[17%] ">
            <Image alt="" src={AILOGO} />
          </div>
          <Link
            href={"/generate-comic"}
            className="bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-7 py-3 rounde-md shadow-black shadow-sm font-semibold"
          >
            <p className="font-bold">Connect with Comic</p>
          </Link>
        </div>
      </>
      {/*  Generate Rhyms */}
      <>
        <h4 className="text-2xl font-medium px-4 py-2 bg-white boxShadow w-max border-[3px] border-priClr ">{`Generate Rhyms`}</h4>
        <div className="boxShadow  justify-center items-center flex flex-col gap-y-6  border-[3px] bg-white z-10 border-priClr p-3 py-5 w-full">
          <div className="relative w-[17%] ">
            <Image alt="" src={RYHM} />
          </div>
          <Link
            href={"/generate-rhym"}
            className="bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-7 py-3 rounde-md shadow-black shadow-sm font-semibold"
          >
            <p className="font-bold">Memorize with Rhyms</p>
          </Link>
        </div>
      </>
    </section>
  );
};

export default StudentDashboard;
