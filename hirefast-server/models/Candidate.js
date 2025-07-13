 
const mongoose = require('mongoose');
const candidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  skills: [String],
  annual_salary_expectation: Object,
  education: Object,
  work_experiences: [Object]
});
module.exports = mongoose.model('Candidate', candidateSchema);
