const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());


app.post('/register',(req,res)=>{
    res.json('Test Ok1')  
});
app.listen(4000);

