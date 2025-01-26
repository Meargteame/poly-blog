import { formatISO9075 } from "date-fns";
import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null); // state for post info
    const { userInfo } = useContext(UserContext); // access user info from context
    const { id } = useParams(); // retrieve post ID from URL params

    useEffect(() => {
        // Fetch post info from the server when the component is mounted
        console.log("Fetching post with ID:", id); // Debugging: Check if ID is correct
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => response.json())
            .then(data => setPostInfo(data)) // Set the fetched data into state
            .catch(err => console.error("Failed to fetch post data:", err));
    }, [id]); // Re-run the effect if the ID changes

    if (!userInfo) return <p>Loading user info...</p>; // Don't render if user info is not available
    if (!postInfo) return <p>Loading post...</p>; // Show loading until post info is fetched

    return (
        <div className="post-page">
            <center><h1>{postInfo.title}</h1></center>
            <center><time>{formatISO9075(new Date(postInfo.createdAt))}</time></center>
            <div className="author">
                <center>by @{postInfo.author.username}</center>
            </div>

            {userInfo.id === postInfo.author._id && (
                <div className="edit-row">
                   
                    <Link to={`/edit/${postInfo._id}`} className="edit-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                        Edit this post
                    </Link>
                </div>
            )}

            <div className="image">
                <img
                    src={`http://localhost:4000/${postInfo.cover}`}
                    alt={postInfo.title}
                    onError={(e) => e.target.src = '/default-image.jpg'} // Fallback image if cover is missing
                />
            </div>

            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    );
}
