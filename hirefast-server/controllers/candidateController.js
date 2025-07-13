 
const Candidate = require('../models/Candidate');
exports.getAllCandidates = async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
};
exports.uploadCandidates = async (req, res) => {
  try {
    await Candidate.insertMany(req.body);
    res.status(201).send('Candidates uploaded successfully');
  } catch (e) {
    res.status(400).send('Upload failed: ' + e.message);
  }
};