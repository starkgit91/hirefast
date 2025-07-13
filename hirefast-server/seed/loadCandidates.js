 
const fs = require('fs');
const mongoose = require('mongoose');
const Candidate = require('../models/Candidate');
require('dotenv').config();
const load = async () => {
  await mongoose.connect(process.env.MONGO_URI);
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'form-submissions.json'), 'utf-8'));
await Candidate.deleteMany({});
await Candidate.insertMany(data);
console.log('Database seeded successfully');
process.exit();
};
load();