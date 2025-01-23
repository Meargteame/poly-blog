import React, { useState } from "react";
import "./LoginForm.css";
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect,setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Send username and password,
        credentials:'include',
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data); // Log the JSON response
        alert("Login successful!");
        setRedirect(true)
      } else {
        console.error("Login failed");
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (redirect){
    return (<Navigate to={'/'}/>)
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
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
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;