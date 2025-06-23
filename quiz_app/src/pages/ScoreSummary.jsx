import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ScoreSummary() {
  const navigate = useNavigate();
  const { score, total } = JSON.parse(localStorage.getItem('lastScore') || '{}');
  const message = score / total >= 0.7 ? "Quiz Champion!" : "More caffeine, maybe?";

  return (
    <div style={{ padding: '5rem 2rem' }}>
      <h2>Your Score: {score} / {total}</h2>
      <p>{message}</p>
      <button onClick={() => navigate('/')}>Play Again</button>
    </div>
  );
}