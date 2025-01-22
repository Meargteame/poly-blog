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

// Middleware to parse JSON body
app.use(express.json());

// Register endpoint to create a new user
app.post('/register', async (req, res) => {
  // Log the received data to confirm it's being sent correctly
  console.log(req.body);

  const { username, password } = req.body;

  try {
    // Create a new user in the MongoDB database
    const userDoc = await User.create({
      username,
      password,
    });

    // Send a response back to the frontend
    res.json(userDoc);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: 'Error creating user', error: err });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
