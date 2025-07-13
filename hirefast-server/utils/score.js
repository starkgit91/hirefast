 
module.exports = function score(candidate) {
  let score = 0;
  if (!candidate) return score;
  if (candidate.skills?.length > 5) score += 20;
  if (candidate.education?.degrees?.some(d => d.isTop50)) score += 15;
  const salary = parseInt(candidate.annual_salary_expectation?.['full-time']?.replace(/[^\d]/g, '')) || 100000;
  if (salary < 80000) score += 20;
  if (candidate.work_experiences?.length > 3) score += 20;
  if (candidate.location?.match(/India|Brazil|Bangladesh|Colombia/i)) score += 15;
  return score;
};
