 
const express = require('express');
const router = express.Router();
const { getAllCandidates, uploadCandidates } = require('../controllers/candidateController');
router.get('/', getAllCandidates);
router.post('/upload', uploadCandidates);
module.exports = router;