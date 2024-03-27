"use client";
import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
export const geminiFeedback = async (score: number, topic: string) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyApzireBTzNrki4j_ycbDForcnTNslCQiM"
  );

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `You're a teacher, provide feedback on the multiple-choice question scores of a student. Analyze which areas the student needs to improve or concentrate on, and provide suggestions related to those areas.The Student score:"${score}" and topic:${topic}  I need the response in JSON format like
    {
        "areas_to_improve": ["Area1", "Area2", "Area3"],
        "guidance": ["Suggestion1", "Suggestion2", "Suggestion3"]
    }
  `;
  // const regex = /"questions"\s*:\s*\[([\s\S]*?)\]/;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(JSON.parse(text.trim()));
  return JSON.parse(text.trim());
};
