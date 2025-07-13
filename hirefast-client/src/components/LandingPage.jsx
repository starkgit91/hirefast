import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>🚀 Welcome to HireFast</h1>
      <p>Streamline hiring with AI-powered insights. Discover, evaluate, and build your dream team.</p>
      <button onClick={() => navigate('/app')}>Enter Application</button>

      <div className="features">
        <div className="feature">
          <h3>📄 Resume Parsing</h3>
          <p>Extract skills, experience, and education from submissions.</p>
        </div>
        <div className="feature">
          <h3>⚖️ Smart Ranking</h3>
          <p>Score candidates based on skills, education, and salary.</p>
        </div>
        <div className="feature">
          <h3>🌍 Diversity Focus</h3>
          <p>Balance regional and technical diversity.</p>
        </div>
        <div className="feature">
          <h3>✅ 1-Click Shortlist</h3>
          <p>Select your top 5 hires instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;