// express 
const express = require('express');
// cors 
const cors = require('cors');

const app = express();




app.use(cors());
// register api 
app.post('/register',(req,res) => {
    res.json("Okay 2")
})


// login api 
app.post('/login',(req,res) => {
    res.json("Okay 2")
})









app.listen(4000);


