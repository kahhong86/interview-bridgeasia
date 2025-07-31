"use client";

import React, { useEffect, useState , FC } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Layout from "../layout";

type Score = {
  id: string;
  name: string;
  value: number;
};

const ScoreList: FC = () => {
const [scores, setScores] = useState<Score[]>([]);

const handleDelete = async (id: string) => {
  await deleteDoc(doc(db, "scores", id));
  setScores(scores.filter(score => score.id !== id));
};

const handleDeleteAll = async () => {
  const querySnapshot = await getDocs(collection(db, "scores"));
  const batchDeletes = querySnapshot.docs.map(docSnap =>
    deleteDoc(doc(db, "scores", docSnap.id))
  );
  await Promise.all(batchDeletes);
  setScores([]);
};

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
        <div className="relative">
            {scores.map(score => (
              <div key={score.id} className="score-list">
                <p>{score.name}</p>
                <p>{score.value}</p>
                <button
                  className="delete-button ml-4 text-red-500 cursor-pointer absolute right-[40px] text-xs mt-[1px]"
                  onClick={() => handleDelete(score.id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div className="text-right mt-2">
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded cursor-pointer delete-all-button"
              onClick={handleDeleteAll}
            >
              Delete All Scores
            </button>
        </div>
    </Layout>
  );
};

export default ScoreList;