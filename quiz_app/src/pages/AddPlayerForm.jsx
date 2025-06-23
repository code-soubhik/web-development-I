import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddPlayerForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    const player = { name, category, difficulty };
    localStorage.setItem('playerInfo', JSON.stringify(player));
    navigate('/quiz');
  };

  return (
    <div style={{ padding: '5rem 2rem' }}>
      <h2>Enter Player Info</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="general">General Knowledge</option>
        <option value="science">Science</option>
      </select><br />
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="hard">Hard</option>
      </select><br />
      <button disabled={!name || !category || !difficulty} onClick={handleStart}>Start Quiz</button>
    </div>
  );
}