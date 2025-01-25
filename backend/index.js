const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User"); // Assuming this is correctly implemented
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 4000;

const salt = bcrypt.genSaltSync(10);
const secret = "hdsjfhuy432jhjhfsfsdfdsfds"; // Change this to a secure value

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/crud", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });

// Register endpoint
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

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

  try {
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
      return res.status(400).json("Wrong credentials!");
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token, { httpOnly: true }).json({ id: userDoc._id ,username});
      });
    } else {
      res.status(400).json("Wrong credentials!");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json("Internal server error");
  }
});

// Profile endpoint
app.get("/profile", (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json(null);
  }

  jwt.verify(token, secret, {}, (err, userInfo) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.status(401).json(null);
    }
    res.json(userInfo.username);
  });
});

// Logout endpoint
app.post("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true }).json("OK");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 