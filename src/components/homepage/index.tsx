"use client";

import QuestionList from "../questions";
import React, { useState } from "react";
import app from "@/firebaseConfig"; 
import { getFirestore, setDoc, doc } from "firebase/firestore";
import Layout from "../layout";

const Home: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const [name, setName] = useState("");

  const db = getFirestore(app);

  const handleScore = async(value: number | null) => {
    setScore(value);

    if (name.trim() && value){
      try{
        await setDoc(doc(getFirestore(), "scores", name), {
          name: name,
          score: value,
          timestamp: new Date().toISOString(),
        });
        alert("Score saved successfully!");
      } catch (error) {
        console.error("Error saving score:", error);
        alert("Failed to save score.");
      }
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Layout>
      <h1 className="text-center mb-4 text-3xl font-bold">Rounding Off to the nearest 10</h1>
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
      
      <div className="block text-center"> 
        <p className="text-center mb-8 bg-violet-400 rounded py-1 px-10 inline-block">Circle the correct answer</p>
      </div>
      <QuestionList onSubmitScore={handleScore} name={name}/>

      <p className="mx-auto text-center mt-4">copyright: mathinenglish.com</p>
    </Layout>
  );
}

export default Home;