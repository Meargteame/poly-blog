// express 
const express = require('express');
const app = express();

// cors 
const cors = require('cors');
app.use(cors());



app.post('/register',(req,res)=>{
    console.log("it is hited ")
    res.json('Test Ok2')  
});
app.listen(4000);

