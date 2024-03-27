import React from "react";

type Props = {};

const Button = ({ onclick, name }: { onclick: () => void; name: string }) => {
  return (
    <div
      onClick={onclick}
      className={` w-full cursor-pointer bg-priClr  grid content-center boxShadow py-3`}
    >
      <p className=" text-white font-black tracking-widest ">{name}</p>
    </div>
  );
};

export default Button;
