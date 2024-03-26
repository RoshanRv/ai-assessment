"use client";
import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
export const gemini = () => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyApzireBTzNrki4j_ycbDForcnTNslCQiM"
  );
  const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `You’re a experienced Teacher,Your task is to generate 10 multiple-choice questions in JSON format based on a topic selected by the user and the preferred difficulty level[HARD,MEDIUM or EASY]. Each question should include four choices. Provide both the topic and the desired difficulty level, and you need to generate the questions accordingly.
    "user":{
        "topic":"solar system",
        "difficulty":"MEDIUM",
    },
    Here's an example of the JSON format for a single question:
    {
      "question": "What is the capital of France?",
      "choices": ["Paris", "Berlin", "London", "Rome"],
      "answer": "Paris",
      "difficulty":"Hard",
    }
    
    `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  };
  return fetchData();
};
