"use client";

import QuestionList from "../questions";
import React, { useState, ChangeEvent, FC } from "react";
import app from "@/firebaseConfig"; 
import { getFirestore, setDoc, doc } from "firebase/firestore";
import Layout from "../layout";

const Home: FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [result, setResult] = useState<boolean>(false);

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
        if (value !== null) {
          setResult(true);
        } else {
          setResult(false);
        }
      } catch (error) {
        console.error("Error saving score:", error);
        alert("Failed to save score.");
      }
    }
  };

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleClose = () => {
    setResult(false);
  }

  return (
    <Layout>
      <h1 className="text-center mb-4 text-3xl font-bold">Rounding Off to the nearest 10</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2 col-span-3 flex">
          <span>Name</span>
          <input type="text" name="name" value={name} onChange={e => handleNameChange(e.target.value)} className="border-b border-black w-full ml-2 relative lg:bottom-[6px]"/>
        </div>
        <div className="lg:col-span-1 col-span-3 flex">
          <span>Score</span>
          <div className="border-b border-black w-full ml-2 relative lg:bottom-[6px] bottom-[8px]">
            <span className="font-bold text-3xl text-emerald-600">{score == null ? "" : score}</span>
          </div> 
        </div>
      </div>
      
      <div className="block text-center"> 
        <p className="text-center mb-8 bg-violet-400 rounded py-1 px-10 inline-block">Circle the correct answer</p>
      </div>
      <QuestionList onSubmitScore={handleScore} name={name} onNameChange={handleNameChange}/>

      <p className="mx-auto text-center mt-4">copyright: mathinenglish.com</p>

      {result && (
        <div className="w-[300px] fixed bottom-4 right-4 bg-green-400 text-black p-4 rounded">
          <span className="rounded-full border-2 absolute top-[-10px] right-[-10px] w-[23px] h-[23px] text-center bg-white leading-none font-semibold" onClick={handleClose}>x</span>
          Your result is <span className="font-bold">{score}</span> out of 12. And your score will be save in the list.
        </div>
      )}
    </Layout>
  );
}

export default Home;