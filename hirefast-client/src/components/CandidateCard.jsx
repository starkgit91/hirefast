 
import React from 'react';
const CandidateCard = ({ data, onShortlist }) => (
  <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: 10 }}>
    <h3>{data.name}</h3>
    <p><strong>Location:</strong> {data.location}</p>
    <p><strong>Skills:</strong> {data.skills?.join(', ') || 'None listed'}</p>
    <p><strong>Salary Expectation:</strong> {data.annual_salary_expectation?.['full-time']}</p>
    <button onClick={() => onShortlist(data)}>Shortlist</button>
  </div>
);
export default CandidateCard;