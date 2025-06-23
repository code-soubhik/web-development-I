import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '5rem 2rem' }}>
      <h1>Welcome to KTJ Quiz App</h1>
      <p>Test your knowledge and track your score!</p>
      <Link to="/start">
        <button style={{ padding: '10px 20px', fontSize: '1rem' }}>Start Quiz</button>
      </Link>
    </div>
  );
}