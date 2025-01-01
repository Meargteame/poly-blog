// src/pages/Home.jsx
import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Home = () => {
  // Sample blog posts data (you'll fetch this from a backend in the future)
  const blogPosts = [
    { id: 1, title: "Welcome to PolyBlog", description: "This is the first post on PolyBlog. Let's get started with blogging!", author: "Admin" },
    { id: 2, title: "How to Build Your First Blog", description: "Learn the basics of building a blog platform from scratch using React and Node.js.", author: "John Doe" },
    { id: 3, title: "10 Tips for Writing Blog Posts", description: "Here are 10 tips to improve your writing skills and make your blog posts more engaging.", author: "Jane Smith" },
    // Add more blog posts as needed
  ];

  return (
    <div className="home-page">
      <Title className="title">Welcome to PolyBlog</Title>
      <Paragraph className="paragraph">
        Explore the world of blogging and start your own blog today.
      </Paragraph>

      <Row gutter={[16, 16]}>
        {blogPosts.map((post) => (
          <Col span={8} key={post.id}>
            <Card
              hoverable
              cover={<img alt={post.title} src="https://via.placeholder.com/300" />}
            >
              <Card.Meta
                title={post.title}
                description={post.description}
              />
              <Link to={`/post/${post.id}`}>
                Read more
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
