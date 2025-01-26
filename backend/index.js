// Import required packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require("fs");

// Import models
const User = require("./models/User");
const Post = require("./models/Post");

const app = express();
const PORT = 4000;

const salt = bcrypt.genSaltSync(10);
const secret = "hdsjfhuy432jhjhfsfsdfdsfds"; // JWT Secret (you can change this to something more secure)

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads',express.static(__dirname + '/uploads'))                                                                                                                                                                                                   
// MongoDB connection
mongoose.connect("mongodb://localhost:27017/crud", { connectTimeoutMS: 30000 })
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });

// Register endpoint
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Validate input data
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required!" });
  }

  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ message: "Error creating user", error: error.message });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required!" });
  }

  try {
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
      return res.status(400).json({ message: "Wrong credentials!" });
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token, { httpOnly: true }).json({ id: userDoc._id, username });
      });
    } else {
      res.status(400).json({ message: "Wrong credentials!" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Profile endpoint
app.get("/profile", (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secret, {}, (err, userInfo) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.json(userInfo.username);
  });
});

// Logout endpoint
app.post("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true }).json({ message: "Logged out successfully" });
});

// Multer setup for file upload with basic validation
const uploadMiddleware = multer({
  dest: "uploads/",
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});



// Create post endpoint
app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded!" });
  }

  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = `${path}.${ext}`;
  fs.renameSync(path, newPath); // Rename the file to preserve its extension

  const { token } = req.cookies;

  jwt.verify(token, secret, {}, async (err, userInfo) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title, summary, content } = req.body;

    try {
      const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
        author: userInfo.id,
      });
      res.status(201).json(postDoc); // Respond with the created post
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ error: "Failed to create post" });
    }
  });
});

// '/post'
app.get('/post', async (req, res) => {
 
    res.json((await Post.find().populate('author',['username']).sort({createdAt: -1}).limit(20)));
  
});

app.put('/post', async (req,res) =>{
  
})
app.get('/post/:id',async (req,res)=>{
  const {id} = req.params;
  const postDoc = await Post.findById(id).populate('author',['username']);
  res.json(postDoc);
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
