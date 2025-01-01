import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/login', { email, password })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Email">
        <Input value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Item>
      <Button type="primary" htmlType="submit">Login</Button>
    </Form>
  );
};

export default Login;
