// src/components/Navbar.jsx
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom"; // For routing between pages

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ backgroundColor: "#000", padding: "0 20px" }}>
      <div className="logo" style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
        PolyBlog
      </div>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ float: "right" }}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/signup">Signup</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
