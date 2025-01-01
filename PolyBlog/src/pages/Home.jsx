// src/pages/Home.jsx
import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom"; // Assuming you will use React Router

const { Title } = Typography;

const Home = () => {
  // Sample data for the cards
  const data = [
    { id: 1, title: "Post 1", description: "This is the description for post 1." },
    { id: 2, title: "Post 2", description: "This is the description for post 2." },
    { id: 3, title: "Post 3", description: "This is the description for post 3." },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <Title level={1}>Welcome to PolyBlog</Title>

      {/* Simple Card Grid */}
      <Row gutter={[16, 16]}>
        {data.map((item) => (
          <Col span={8} key={item.id}>
            <Card
              hoverable
              title={item.title}
              bordered={false}
              style={{ width: 300 }}
            >
              <p>{item.description}</p>
              <Link to={`/post/${item.id}`}>Read More</Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
