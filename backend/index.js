const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

app.post('/register', (req, res) => {
    // Log the received data to confirm it's being sent correctly
    console.log(req.body);
    const { username ,password } = req.body;
    // Send a response back to the frontend
    res.json('Test Ok2');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
