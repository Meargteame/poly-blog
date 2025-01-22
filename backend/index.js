const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming the User model exists
const app = express();
const PORT = 4000;

// MongoDB connection string (customized)
// const mongoURI ='mongodb+srv:meareg:admin@cluster0.dlasb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// // Connect to MongoDB
mongoose.connect(mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware to enable CORS
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017');


app.post('/register', (req,res) => {
  const { username,password } = req.body;
  res.json({ requestData:{username,password}});
})


app.listen(4000)