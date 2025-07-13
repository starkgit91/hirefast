require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const candidatesRoutes = require('./routes/candidates');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/candidates', candidatesRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error(err));
