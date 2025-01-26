import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";

export default function EditPost() {
  const { id } = useParams(); // Fetch the post ID from URL parameters
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);

  // Fetch the existing post details to pre-fill the form
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then((res) => {
        if (res.ok) {
          res.json().then((postInfo) => {
            setTitle(postInfo.title);
            setSummary(postInfo.summary);
            setContent(postInfo.content);
          });
        } else {
          console.error("Failed to fetch post data");
        }
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  // Function to update the post
  async function updatePost(ev) {
    ev.preventDefault();

    if (!content.trim()) {
      alert("Content is required!");
      return;
    }

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    if (files && files[0]) {
      data.set('file', files[0]);
    }

    try {
      const response = await fetch(`http://localhost:4000/post/${id}`, {
        method: 'PUT',
        body: data,
        credentials: 'include',
      });

      if (response.ok) {
        console.log("Post updated successfully");
        setRedirect(true);
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }

  if (redirect) {
    return <Navigate to={"/post"+id} />;
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
        required
      />
      <input
        type="file"
        onChange={(ev) => setFiles(ev.target.files)}
      />
      <Editor onChange={setContent} value={content} />
      <button className="create-post-btn">Update Post</button>
    </form>
  );
}
