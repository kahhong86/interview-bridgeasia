"use client";

import React, { useState, FC } from 'react';
import { Question } from './question';
import styles from './Questions.module.css';

interface QuestionListProps {
  onSubmitScore: (score: number | null) => void;
  name: string;
  onNameChange: (name: string) => void;
}

const QuestionList: FC<QuestionListProps> = ({ onSubmitScore, name, onNameChange }) => {
    const [selected, setSelected] = useState<{[key: number]: number | null}>({});
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (questionIdx: number, optionId: number) => {
        setSelected(prev => ({ ...prev, [questionIdx]: optionId }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(name.trim() === "") {
            alert("Please enter your name before submitting.");
            return;
        }

        setSubmitted(true);
        let score = 0;
        Question.forEach((item, index) => {
            if (selected[index] === item.answer) {
                score += 1;
            }
        });
        onSubmitScore(score);
    };

    const handleReset = () => {
        setSelected({});
        setSubmitted(false);
        onSubmitScore(null);
        onNameChange("");
    };

    const handleRestart = () => {
        setSelected({});
        setSubmitted(false);
        onSubmitScore(null);
        onNameChange("");
    };

    return (
        <form className="experience-list" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {Question.map((item, index) => {
                    const selectedOptionId = selected[index];
                    const isSelected = selectedOptionId !== undefined && selectedOptionId !== null;
                    const isCorrect = selectedOptionId === item.answer;

                    return (
                        <div key={index} className="question-item">
                            <h3 className="question-text">{item.question}</h3>
                            <ul className="options-list">
                                {item.options.map(option => (
                                    <li key={option.id} className="option-item">
                                        <label className={`${styles.labeloption} cursor-pointer pr-1 rounded-full`}>
                                            <span
                                                className={`inline-block h-[25px] p-1 leading-none option-button ${
                                                    submitted && selectedOptionId === option.id && isCorrect
                                                        ? 'border-2 border-green-500 rounded-full'
                                                        : ''
                                                } ${
                                                    submitted && selectedOptionId === option.id && !isCorrect
                                                        ? 'border-2 border-red-500 rounded-full'
                                                        : ''
                                                }`}
                                            >
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                value={option.id}
                                                checked={selectedOptionId === option.id}
                                                onChange={() => handleSelect(index, option.id)}
                                            />
                                            </span>

                                            <span className="inline-block pl-2">{option.value}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                            {submitted && (!isCorrect) && (
                                <p className="explanation-text text-xs text-red-400">
                                    {isSelected ? item.explanation : "No answer selected."}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
            <div  className="mx-auto text-center mt-4">
                {submitted ?(
                    <div>
                        <span className="inline-block bg-gray-500 mt-2 px-4 py-1 text-white rounded">Submitted</span>
                        <button className={`${styles.submitbutton} cursor-pointer inline-block bg-blue-500 mt-2 ml-2 px-4 py-1 text-white rounded`} type="reset" onClick={handleRestart}>Restart</button>
                    </div>
                    
                    
                ):
                    <div>
                        <button className={`${styles.submitbutton} cursor-pointer bg-blue-500 mt-2 px-4 py-1 text-white rounded`} type="submit">Submit</button>
                        <button className={`${styles.submitbutton} cursor-pointer bg-blue-500 mt-2 px-4 py-1 ml-2 text-white rounded`} type="reset" onClick={handleReset}>Reset</button>
                    </div>
                }
            </div>
        </form>
    );
}

export default QuestionList;