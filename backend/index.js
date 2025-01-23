const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const PORT = 4000;

const salt = bcrypt.genSaltSync(10);
const secret = 'hdsjfhuy432jhjhfsfsdfdsfds'
// Middleware to enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend's origin
  credentials: true, // Allow credentials (cookies, etc.)
}));
// 
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






// loggin endpoint 


app.post('/login',async (req,res)=>{
  const { username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password,userDoc.password);

  if(passOk){
     jwt.sign({username,id:userDoc.id},secret,{},(err,token)=>{
      if(err) throw err;
      res.cookie('token',token).json('OK!');
    })
  }else{
    res.status(400).json('wrong credentials!')
  }
})

app.get('/profile',(req,res) =>{
  const { token } =req.cookies;
  jwt.verify(token,secret,{},(err,info)=>{
    if(err) throw err;
    res.json(info);
  })
  // res.json(req.cookies);
})

app.listen(4000, () => {
  console.log(`Server running on port ${PORT}`);
});
