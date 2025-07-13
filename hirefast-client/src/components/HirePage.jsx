import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CandidateCard from './CandidateCard';
import ShortlistView from './ShortlistView';

const HirePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [shortlist, setShortlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/candidates')
      .then(res => setCandidates(res.data))
      .catch(err => console.error(err));
  }, []);

  const addToShortlist = (candidate) => {
    if (shortlist.length < 5 && !shortlist.includes(candidate)) {
      setShortlist([...shortlist, candidate]);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Candidate Manager</h1>
      <p>Select up to 5 candidates and view the final summary.</p>
      <div>
        {candidates.map((c, i) => (
          <CandidateCard key={i} data={c} onShortlist={addToShortlist} />
        ))}
      </div>
      <ShortlistView shortlist={shortlist} />
      <button disabled={shortlist.length !== 5} onClick={() => navigate('/summary', { state: { shortlist } })}>
        Finalize Selection
      </button>
    </div>
  );
};

export default HirePage;
