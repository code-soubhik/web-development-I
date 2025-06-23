import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Tolstoy", "Homer", "Milton"],
    answer: "Shakespeare",
  }
];

export default function QuizEngine() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = timeLeft > 0 && setInterval(() => setTimeLeft(t => t - 1), 1000);
    if (timeLeft === 0) handleNext();
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSelect = (option) => {
    setSelected(option);
    if (option === questions[current].answer) setScore(score + 1);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setTimeLeft(15);
    } else {
      localStorage.setItem('lastScore', JSON.stringify({ score, total: questions.length }));
      navigate('/summary');
    }
  };

  return (
    <div style={{ padding: '5rem 2rem' }}>
      <h2>Question {current + 1}</h2>
      <p>{questions[current].question}</p>
      {questions[current].options.map(opt => (
        <button
          key={opt}
          onClick={() => handleSelect(opt)}
          disabled={selected !== null}
          style={{
            backgroundColor: selected
              ? opt === questions[current].answer
                ? 'green'
                : opt === selected ? 'red' : ''
              : ''
          }}
        >
          {opt}
        </button>
      ))}
      <div>
        <p>Time left: {timeLeft}s</p>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}