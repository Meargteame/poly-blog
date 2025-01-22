// export default function (){
//     return (
//         <div>
//             <h2><center> Login </center></h2>
//             <form action="" className="login">
//                 <input type="text" placeholder="username"/>
//                 <input type="password" placeholder="password"/>
//                 <button>Login</button>
//             </form>
//         </div>
//     )
// }

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
