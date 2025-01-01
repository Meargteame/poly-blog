// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar"; // Navbar component
import Home from "./pages/Home"; // Import Home page
import Login from "./pages/Login"; // Import Login page
import Signup from "./pages/Signup"; // Import Signup page

// importing styles
import './styles/home.css'; // For Home Page
import './styles/login.css'; // For Login Page
import './styles/signup.css'; // For Sign-Up Page
import './styles/PostDetails.css'; // For Post Details Page
import './styles/App.css'; // For Post Details Page



const App = () => {
  return (
    <Router>
      <Layout>
        <Navbar /> {/* Include Navbar in the layout */}

        <Layout.Content style={{ padding: "50px" }}>
          <Routes>
            <Route path="/" element={<Home  />} /> {/* Home page route */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout.Content>
      </Layout>
    </Router>
  );
};

export default App;
