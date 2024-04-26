"use client";
import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
export const geminiComicStory = async (captions: string) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyApzireBTzNrki4j_ycbDForcnTNslCQiM"
  );

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `Create a story which should have atleast 10 lines. The Story should be based on the caption ${captions}.I need the response in JSON format.
  Ensure that the response should always be in same format that given below.Don't include any additional text like "'''json" or any other kind of text ,{} or [] in the response.
    {
        "story": "story here",
    }
  `;
  // const regex = /"questions"\s*:\s*\[([\s\S]*?)\]/;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(JSON.parse(text.trim()).story);
  return JSON.parse(text.trim()).story;
  // return JSON.parse(text.replace(/```json\n|\n```/g, "").trim());
};
