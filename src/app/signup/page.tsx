"use client";

import Header from "@/components/Header";
import Button from "@/components/button/Button";
import useToast from "@/store/useToast";
import useUser from "@/store/useUser";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MailIcon } from "lucide-react";
type Props = {};

const Signup = (props: Props) => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rolei, setRolei] = useState("staff");

  const setToast = useToast((state) => state.setToast);
  const setUser = useUser((state) => state.setUser);
  const setRole = useUser((state) => state.setRole);

  const signUp = async () => {
    try {
      if (userName && pass && userEmail && rolei) {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/teacher/register`,
          {
            name: userName,
            pass: pass,
            email: userEmail,
            role: rolei,
          }
        );
        setToast({
          msg: "Registered Successfully",
          variant: "success",
        });
        router.push("/login");
      } else {
        setToast({ msg: "Fill All Details", variant: "error" });
      }
    } catch (err) {
      setToast({ msg: "User Already Exists", variant: "error" });
    }
  };

  return (
    <>
      <Header />
      <div className=" w-full h-[calc(100vh-4rem)] flex justify-center items-center bg">
        {/* --- BG Designs --- */}
        <div className=" w-96 h-auto py-10 text-center px-7 p-5 CardShadow flex flex-col gap-y-6  border-[3px] bg-white z-10 border-priClr  ">
          <h1 className=" font-black tracking-wider text-3xl">REGISTER </h1>
          <div className=" flex items-center h-12 w-full border-black border boxShadow">
            <div
              className="flex justify-center items-center 
           text-black w-14 h-full "
            >
              <FaUserCircle className=" text-priClr text-2xl" />
            </div>
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="px-2 h-full outline-none w-full boxShadow"
            />
          </div>
          <div className=" flex items-center h-12 w-full border-black border boxShadow">
            <div
              className="flex justify-center items-center 
           text-black w-14 h-full "
            >
              <MailIcon className=" text-priClr text-2xl" />
            </div>
            <input
              type="text"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
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

          <div>
            <select
              value={rolei}
              onChange={(e) => setRolei(e.target.value)}
              className="w-full pl-4 h-12 border-black border boxShadow"
              name="role"
              id="role"
            >
              <option value="staff">Staff</option>
              <option value="student">Student</option>
            </select>
          </div>

          <Button onclick={signUp} name="SignUp" />
        </div>
      </div>
    </>
  );
};

export default Signup;
