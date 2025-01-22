const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming the User model exists
const app = express();
const PORT = 4000;

// Middleware to enable CORS
app.use(cors());mongodb://localhost:27017/crud
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/crud')
.then(()=>{
  console.log("Db connected succesfully!");
})
.catch(()=>{
  console.log('Db is not connected !');
})


app.post('/register', async (req,res) => {
  const { username,password } = req.body;

  try{
    const userDoc = await User.create({username,password});
    console.log(username,password);
    console.log(userDoc)
    res.json(userDoc);
  }catch{
    res.status(400).json(e);
  }
  
})


app.listen(4000)