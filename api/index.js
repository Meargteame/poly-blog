
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const Post = require('./models/Post');
const app = express();
const fs = require('fs');


app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
const uri = 'mongodb+srv://mongodb:mongodb@cluster0.wr324.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(uri);

app.post('/register', async (req,res) => {
  const {username,password} = req.body;
  try{
    const userDoc = await User.create({
      username,
      password:bcrypt.hashSync(password,salt),
    });
    res.json(userDoc);
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});



app.post('/logout', (req,res) => {
  res.cookie('token', '').json('ok');
});

;






app.listen(4000);
//
