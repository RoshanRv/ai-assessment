"use client";
import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
export const gemini = async (topic: string, difficulty: string) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyApzireBTzNrki4j_ycbDForcnTNslCQiM"
  );

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `You’re a experienced Teacher,Your task is to generate 10 multiple-choice questions in JSON format based on a topic selected by the user and the preferred difficulty level[HARD,MEDIUM or EASY]. Each question should include four choices. Provide both the topic and the desired difficulty level, and you need to generate the questions accordingly.
  Ensure that the response should always be in Array of JSON format.Don't include any additional text like "'''json" or any other kind of text ,{} or [] in the response.
    "user":{
        "topic":"${topic}",
        "difficulty":"${difficulty}",
    },
    Here's an example of the JSON format for a single question:
    {
      "question": "What is the capital of France?",
      "options": ["Paris", "Berlin", "London", "Rome"],
      "answer": "Paris",
      "difficulty":"Hard",
    }
    
    `;
  // const regex = /"questions"\s*:\s*\[([\s\S]*?)\]/;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  if (text.startsWith("```json")) {
    console.log("starts with json");

    console.log(JSON.parse(text.slice(6, -3).trim()));

    return JSON.parse(text.substring(6, text.length - 3).trim());
  }

  console.log(JSON.parse(text.trim()));

  return JSON.parse(text.trim());
};
