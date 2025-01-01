// src/pages/PostDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Typography, Button, Spin, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const PostDetails = () => {
  const { id } = useParams(); // Access the post ID from the URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulate fetching post details from an API
    setTimeout(() => {
      const fetchedPost = {
        title: "Sample Blog Post Title",
        author: "John Doe",
        date: "January 1, 2025",
        content: "This is a detailed view of the blog post content. You can add your blog content here.",
      };
      setPost(fetchedPost);
      setLoading(false);
    }, 2000);
  }, [id]);

  const goBack = () => {
    navigate("/"); // Navigate to the Home page
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto" }}>
      <Card
        title={<Title level={2}>{post.title}</Title>}
        extra={<Button onClick={goBack}>Back to Home</Button>}
      >
        <Typography.Paragraph>
          <strong>Author:</strong> {post.author}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Date:</strong> {post.date}
        </Typography.Paragraph>

        <Paragraph>{post.content}</Paragraph>
      </Card>
    </div>
  );
};

export default PostDetails;
