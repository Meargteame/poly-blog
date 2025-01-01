// src/pages/Login.jsx
import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulating an API request (you can replace this with an actual API call)
    setTimeout(() => {
      setLoading(false);
      message.success("Logged in successfully");
      // Redirect to the Home page after successful login
      navigate("/");
    }, 2000);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center" }}>Login</Title>
      
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ maxWidth: "100%" }}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }, { type: "email", message: "Please input a valid email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit" loading={loading} style={{ width: "100%" }}>
            Log in
          </Button>
        </Form.Item>
      </Form>

      <div style={{ textAlign: "center" }}>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
