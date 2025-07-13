 
import React from 'react';
const ShortlistView = ({ shortlist }) => (
  <div>
    <h2>Shortlisted Candidates ({shortlist.length}/5)</h2>
    {shortlist.map((c, i) => (
      <div key={i} style={{ background: '#eef', marginBottom: 8, padding: 10 }}>
        <strong>{c.name}</strong> - {c.skills?.slice(0, 3).join(', ')} - {c.annual_salary_expectation?.['full-time']}
      </div>
    ))}
  </div>
);
export default ShortlistView;