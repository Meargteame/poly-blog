import React, { useState } from "react";
import "./LoginForm.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Send username and password
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data); // Log the JSON response
        alert("Registration successful!");
      } else {
        console.error("Registration failed");
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Type your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update state on input change
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on input change
              required
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
