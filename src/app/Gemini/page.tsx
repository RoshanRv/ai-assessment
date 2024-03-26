"use client";
import { gemini } from "@/utils/chat/geminiAPI";
import React, { useEffect } from "react";

type Props = {};

const page = (props: Props) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await gemini(); // Call the gemini function
        // Set the result in state
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when component mounts
  }, []);

  return <div>{}</div>;
};

export default page;
