"use client";

import Button from "@/components/button/Button";
import axios from "axios";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const Login = async () => {
    if (userName && pass) {
      await axios.post("http://localhost:3000/api/teacher/login", {
        name: userName,
        pass: pass,
      });
    } else {
      alert("Fill the details");
    }
  };

  return (
    <div className=" w-full h-[100vh] flex justify-center items-center">
      {/* BG Designs */}
      <div className="w-[30rem] absolute top-[30%] left-[80%]  rotate-45  h-[50rem] bg-gradient-to-br from-priClr/60 to-secClr/60 rounded-tr-2xl  blur-3xl " />
      <div className="w-[30rem] absolute bottom-[30%] right-[80%]  rotate-45  h-[50rem] bg-gradient-to-br from-priClr/60 to-secClr/60 rounded-tr-2xl  blur-3xl " />
      {/* --- BG Designs --- */}
      <div className=" w-96 h-auto py-10 text-center px-7 p-5 CardShadow flex flex-col gap-y-4  border-[3px] bg-white z-10 border-priClr  ">
        <h1 className=" font-black tracking-wider text-3xl">STAFF LOGIN </h1>
        <div className=" flex items-center h-12 w-full border-black border">
          {/* <div
            className="flex justify-center items-center 
           text-black w-14 h-full ">
            <FaUserCircle className="  text-2xl" />
          </div> */}
          <input
            type="text"
            placeholder="Staff Name or Email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="px-2 h-full outline-none w-full boxShadow"
          />
        </div>
        <div className=" flex items-center h-12 w-full border-black border">
          {/* <div
            className="flex justify-center items-center 
           text-black w-14 h-full ">
            <RiLockPasswordFill className="  text-2xl" />
          </div> */}
          <input
            type="text"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="px-2 h-full outline-none w-full boxShadow"
          />
        </div>

        <Button onclick={Login} />
      </div>
    </div>
  );
};

export default page;
