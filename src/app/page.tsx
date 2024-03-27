"use client";

import HomeBG from "@/components/HomeBG";
import HomeContent from "@/components/HomeContent";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const details = localStorage.getItem("ai-assessment");
    if (details) {
      router.push("/assessment");
    }
  }, []);

  return (
    <HomeBG>
      <HomeContent />
    </HomeBG>
  );
}
