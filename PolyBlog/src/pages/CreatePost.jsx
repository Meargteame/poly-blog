// src/pages/CreatePost.jsx
import React, { useState } from "react";
import { Card, Input, Button, message, Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CreatePost = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // Simulate saving the new post (API call could be used here)
    setLoading(true);
    setTimeout(() => {
      message.success("Post created successfully!");
      setLoading(false);
      form.resetFields(); // Reset form after successful post creation
    }, 1500);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto" }}>
      <Card title="Create a New Post" bordered={false}>
        <Form
          form={form}
          onFinish={onFinish}
          initialValues={{ remember: true }}
          layout="vertical"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input placeholder="Enter post title" />
          </Form.Item>

          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: "Please input the content!" }]}
          >
            <Input.TextArea rows={6} placeholder="Enter post content" />
          </Form.Item>

          <Form.Item label="Post Image" name="image">
            <Upload
              name="file"
              beforeUpload={() => false}
              listType="picture"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              Create Post
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreatePost;
