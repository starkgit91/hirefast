import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const shortlist = location.state?.shortlist || [];

  return (
    <div style={{ padding: 20 }}>
      <h1>Final Shortlist Summary</h1>
      {shortlist.length === 0 ? (
        <p>No candidates selected.</p>
      ) : (
        <ul>
          {shortlist.map((c, i) => (
            <li key={i}>
              <strong>{c.name}</strong> from {c.location} - Expected: {c.annual_salary_expectation?.['full-time']}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate('/app')}>Go Back</button>
    </div>
  );
};

export default SummaryPage;
