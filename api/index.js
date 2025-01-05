const express = require('express');
const mongoose = require("mongoose");

const cors = require('cors');

const app = express();


mongoose.connect('mongodb+srv://mearegteame99995555:R702Ca8aj8imMPb1@cluster0.llc8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
app.use(cors());
app.use(express.json());

// Register API
app.post('/register', (req, res) => {
  const { username, password } = req.body; // Correct destructuring
  console.log(password,username);
  res.json({ requestedData: { username, password } });
});

// Login API
app.post('/login', (req, res) => {
  const { username, password } = req.body; // Correct destructuring
  console.log(username, password);
  res.json({ requestedData: { username, password } });
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});


