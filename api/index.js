const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://poly:05uXPFqeySH44SSu@cluster0.i3mni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


// Register API
app.post('/register', (req, res) => {
  const { username, password } = req.body; 
  User.create({
    
  })
  res.json({ requestedData: { username, password } });
});

// Login API
app.post('/login', (req, res) => {
  const { username, password } = req.body; 
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