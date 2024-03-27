"use client";
import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
export const geminiFeedback = async (
  score: number,
  topic: string,
  history: any
) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyApzireBTzNrki4j_ycbDForcnTNslCQiM"
  );

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `You're a teacher, provide feedback on the multiple-choice question scores of a student. Analyze which areas the student needs to improve or concentrate on based on Score, topic and his responses and provide suggestions related to those areas.The Student score:"${score}" and topic:${topic} and his responses: ${history} I need the response in JSON format like.
  Ensure that the response should always be in Array of JSON format.Don't include any additional text like "'''json\n '''"
    {
        "areas_to_improve": ["Area1", "Area2", "Area3"],
        "guidance": ["Suggestion1", "Suggestion2", "Suggestion3"],
        "strengths": ["Strength1", "Strength2", "Strength3"],
        "weaknesses": ["Weakness1", "Weakness2", "Weakness3"],
        "encouragement": "Encouragement message",
    }
  `;
  // const regex = /"questions"\s*:\s*\[([\s\S]*?)\]/;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text.trim());
  return JSON.parse(text.replace(/```json\n|\n```/g, "").trim());
};
