// express 
const express = require('express');
// cors 
const cors = require('cors');

const app = express();

app.use(cors());



app.post('/register',(req,res)=>{
    console.log("it is hited ")
    res.json('Test Ok2')  
});
app.listen(4000);

