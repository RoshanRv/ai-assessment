import Button from "@/components/button/Button";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" w-full h-[100vh] flex justify-center items-center bg">
      {/* --- BG Designs --- */}
      <div className=" w-96 h-auto py-10 text-center px-7 p-5 CardShadow flex flex-col gap-y-6  border-[3px] bg-white z-10 border-priClr  ">
        <h1 className=" font-black tracking-wider text-3xl">LOGIN </h1>
        <div className=" flex items-center h-12 w-full border-black border boxShadow">
          <div
            className="flex justify-center items-center 
           text-black w-14 h-full "
          >
            <FaUserCircle className=" text-priClr text-2xl" />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="px-2 h-full outline-none w-full boxShadow"
          />
        </div>
        <div className=" flex items-center h-12 w-full boxShadow border-black border">
          <div
            className="flex justify-center items-center 
           text-black w-14 h-full "
          >
            <RiLockPasswordFill className=" text-priClr text-2xl" />
          </div>
          <input
            type="text"
            placeholder="Password"
            className="px-2 h-full outline-none w-full boxShadow "
          />
        </div>

        <Button />
      </div>
    </div>
  );
};

export default page;
