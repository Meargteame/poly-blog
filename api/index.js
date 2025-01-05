const express = require('express');
const mongoose = require("mongoose");

const cors = require('cors');

const app = express();


mongoose.connect('mongodb+srv://poly:05uXPFqeySH44SSu@cluster0.i3mni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
app.use(cors());
app.use(express.json());



// Register API
app.post('/register', (req, res) => {
  const { username, password } = req.body; // Correct destructuring
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


// 


// {
//     
// }