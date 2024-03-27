"use client";

import HomeBG from "@/components/HomeBG";
import HomeContent from "@/components/HomeContent";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUser from "@/store/useUser";

export default function Home() {
  const router = useRouter();
  const setUser = useUser((state) => state.setUser);
  const setRole = useUser((state) => state.setRole);

  useEffect(() => {
    const details = localStorage.getItem("ai-assessment");
    if (details) {
      setUser(JSON.parse(details));
      setRole(JSON.parse(details).role);
    }
  }, []);

  return (
    <HomeBG>
      <HomeContent />
    </HomeBG>
  );
}
