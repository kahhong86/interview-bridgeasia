"use client";

import QuestionList from "@/src/questions";
import React, { useState } from "react";

export default function Home() {
  const [score, setScore] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");

  const handleScore = (value: number | null) => {
    setScore(value);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className={`min-h-screen  ${darkMode ? "dark-mode" : ""}`}>
      <div className="lg:p-24 lg:max-w-6xl mx-auto p-10">
        <button
        onClick={toggleDarkMode}
        className="mb-4 px-4 py-2 border rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1 className="text-xl font-bold m-auto text-center">Math Test</h1>
      <h2 className="text-center mb-4">Rounding Off to the nearest 10</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-2 flex">
          <span>Name</span>
          <input type="text" name="name" onChange={handleNameChange} className="border-b border-black w-full ml-2"/>
        </div>
        <div className="flex">
          <span>Score</span>
          <div className="border-b border-black w-full ml-2">
            {score == null ? "" : score}
          </div> 
        </div>
      </div>
      
      
      <p className="text-center mb-8">Circle the correct answer</p>
      <QuestionList onSubmitScore={handleScore} name={name}/>

      <p className="mx-auto text-center mt-4">copyright: mathinenglish.com</p>
      </div>
    </div>
  );
}
