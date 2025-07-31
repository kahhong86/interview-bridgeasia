"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Header from "../header";
import Layout from "../layout";

type Score = {
  id: string;
  name: string;
  value: number;
};

const ScoreList: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      const querySnapshot = await getDocs(collection(db, "scores"));
      const scoresArray: Score[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          value: data.score,
        };
      });
      setScores(scoresArray);
    };
    fetchScores();
  }, []);

  return (
    <Layout>
        <h1 className="text-center mb-4 text-3xl font-bold">All Scores</h1>
        <div className="score-list" id="title-score">
          <p className="font-bold text-lg">Name</p>
          <p className="font-bold text-lg">Score</p>
        </div>
        <div>
            {scores.map(score => (
              <div key={score.id} className="score-list">
                <p>{score.name}</p>
                <p>{score.value}</p>
              </div>
            ))}
        </div>
    </Layout>
  );
};

export default ScoreList;