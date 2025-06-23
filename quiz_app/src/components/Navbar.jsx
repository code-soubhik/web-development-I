import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">KTJ Quiz</div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/start" onClick={() => setMenuOpen(false)}>Start Quiz</Link>
        <Link to="/scores" onClick={() => setMenuOpen(false)}>Scores</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
); }