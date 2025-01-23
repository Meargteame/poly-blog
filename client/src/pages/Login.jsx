

import React from "react";
import "./LoginForm.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Type your username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Type your password" />
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
