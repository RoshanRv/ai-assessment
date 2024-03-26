import React from "react";

type Props = {};

const Button = (props: Props) => {
  return (
    <div
      className={` w-full cursor-pointer bg-priClr  grid content-center boxShadow py-3`}>
      <p className=" text-white font-black tracking-widest ">Login</p>
    </div>
  );
};

export default Button;
