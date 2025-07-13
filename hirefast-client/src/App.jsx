 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CandidateCard from './components/CandidateCard';
// import ShortlistView from './components/ShortlistView';

// function App() {
//   const [candidates, setCandidates] = useState([]);
//   const [shortlist, setShortlist] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/candidates')
//       .then(res => setCandidates(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const addToShortlist = (candidate) => {
//     if (shortlist.length < 5 && !shortlist.includes(candidate)) {
//       setShortlist([...shortlist, candidate]);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>HireFast Candidate Manager</h1>
//       <div>
//         <h2>All Candidates</h2>
//         {candidates.map((c, i) => (
//           <CandidateCard key={i} data={c} onShortlist={addToShortlist} />
//         ))}
//       </div>
//       <ShortlistView shortlist={shortlist} />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HirePage from './components/HirePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<HirePage />} />
    </Routes>
  );
}