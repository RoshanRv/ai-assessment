import useUser from "@/store/useUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLogOut } from "react-icons/bi";

type Props = {};

const Header = (props: Props) => {
  const route = useRouter();
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);
  const setRole = useUser((state) => state.setRole);

  const logout = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem("ai-assessment");
    route.push("/");
  };
  return (
    <nav className="px-4 py-4 border-b  bg-white h-[4rem] flex items-center justify-between">
      <Link href={"/"}>
        <h1 className="text-2xl font-semibold">AI-Assessment</h1>
      </Link>
      <div className="flex gap-4 items-center">
        <p>{user?.userName}</p>
        <button
          onClick={logout}
          className="p-3 rounded-full hover:bg-black/10 transition-all">
          <BiLogOut />
        </button>
      </div>
    </nav>
  );
};

export default Header;
