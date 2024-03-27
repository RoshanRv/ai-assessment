"use client";

import Header from "@/components/Header";
import Button from "@/components/button/Button";
import useToast from "@/store/useToast";
import useUser from "@/store/useUser";
import axios from "axios";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

type Props = {};

const page = (props: Props) => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const setToast = useToast((state) => state.setToast);
  const setUser = useUser((state) => state.setUser);
  const setRole = useUser((state) => state.setRole);

  const Login = async () => {
    try {
      if (userName && pass) {
        const { data } = await axios.post(
          "http://localhost:3000/api/teacher/login",
          {
            name: userName,
            pass: pass,
          }
        );
        setToast({
          msg: "Logged In",
          variant: "success",
        });
        localStorage.setItem("ai-assessment", JSON.stringify(data));
        setUser(data);
        setRole(data.role);
      } else {
        setToast({ msg: "Fill All Details", variant: "error" });
      }
    } catch (err) {
      setToast({ msg: "Invalid Credentials", variant: "error" });
    }
  };

  return (
    <>
      <Header />
      <div className=" w-full h-[calc(100vh-4rem)] flex justify-center items-center bg">
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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="px-2 h-full outline-none w-full boxShadow"
            />
          </div>

          <Button onclick={Login} />
        </div>
      </div>
    </>
  );
};

export default page;
