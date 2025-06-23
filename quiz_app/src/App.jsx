import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddPlayerForm from './pages/AddPlayerForm';
import QuizEngine from './pages/QuizEngine';
import ScoreSummary from './pages/ScoreSummary';
import Leaderboard from './pages/Leaderboard';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<AddPlayerForm />} />
        <Route path="/quiz" element={<QuizEngine />} />
        <Route path="/summary" element={<ScoreSummary />} />
        <Route path="/scores" element={<Leaderboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;