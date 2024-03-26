import useUser from "@/store/useUser";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const user = useUser((state) => state.user);
  return (
    <nav className="px-4 py-4 border-b  bg-white h-[4rem] flex items-center justify-between">
      <h1 className="text-2xl font-semibold">AI-Assessment</h1>
      <div className="flex gap-4 items-center">
        <p>{user?.name}</p>
      </div>
    </nav>
  );
};

export default Header;
