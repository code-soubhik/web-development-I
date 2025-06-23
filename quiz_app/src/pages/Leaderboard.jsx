import React, { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    setEntries(scores);
  }, []);

  return (
    <div style={{ padding: '5rem 2rem' }}>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Score</th><th>Date</th></tr>
        </thead>
        <tbody>
          {entries.map((e, idx) => (
            <tr key={idx}><td>{e.name}</td><td>{e.score}</td><td>{e.date}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}