const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User'); 
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 4000;

const salt = bcrypt.genSaltSync(10);

// Middleware to enable CORS
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/crud')
.then(() => {
  console.log("Db connected successfully!");
})
.catch(() => {
  console.log('Db is not connected!');
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt)
    });
    console.log(username, password);
    console.log(userDoc);
    res.json(userDoc);
  } catch (error) { // Use 'error' here
    console.error('Error creating user:', error); // Log the error for debugging
    res.status(400).json({ message: 'Error creating user', error: error.message }); // Return a response with error details
  }
});

app.listen(4000, () => {
  console.log(`Server running on port ${PORT}`);
});
