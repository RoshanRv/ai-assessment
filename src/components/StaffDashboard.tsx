import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
type Props = {};

const StaffDashboard = (props: Props) => {
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
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-medium px-4 py-2 bg-white boxShadow w-max border-[3px] border-priClr ">{`Your Validated Assessments`}</h4>
          <Link
            href={"/assessment/none"}
            className="bg-priClr  text-white capitalize border-[3px] border-black boxShadow flex items-center gap-2 px-7 py-2 rounde-md shadow-black shadow-sm font-semibold">
            <BiPlus className="text-[23px] text-white" />
            <p className="font-semibold text-lg">Create Assessements</p>
          </Link>
        </div>
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
              You Have Not Validated Any Assessments
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6 items-center ">
            {assessments.map((assess) => (
              <div className="p-3 flex flex-col gap-2 boxShadow border-[3px] bg-white hover:bg-black/5 transition-all z-10 border-priClr">
                <div className="flex gap-4 items-center ">
                  <h1 className="text-2xl font-semibold ">{assess?.topic}</h1>
                  {/* DIFFICULTY */}
                  <p className="text-xs px-4 py-0.5 rounded-sm text-white font-semibold  bg-priClr">
                    {assess?.difficulty}
                  </p>
                </div>
                <div className="flex justify-between items-center font-medium text-sm text-gray-400">
                  <p>{assess?.staffName}</p>
                  <p>{assess?.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    </section>
  );
};

export default StaffDashboard;
