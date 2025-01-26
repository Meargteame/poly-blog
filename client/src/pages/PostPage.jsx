import { formatISO9075 } from "date-fns";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function PostPage(){
    const [postInformation,setPostInformation] = useState(null);
    const {userInformation} = useContext(UserContext);

    const {id} = useParams();
    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:4000/post/${id}`).then(response => {
            response.json().then(postInformation => {
                setPostInformation(postInformation);
            });
        })
    },[]);
    if(!postInformation) return '';

    return (
        <div className="post-page">
            <center><h1>{postInformation.title}</h1></center>
            <center><time>{formatISO9075(new Date(postInformation.createdAt))}</time></center>
            <div className="author">
               <center> by @{postInformation.author.username} </center>
            </div>
            {userInformation.id === postInformation.author._id && (
                <div className="edit-row">
                    <a className="edit-btn" href="">Edit this post</a>
                </div>
            )}
            <div className="image">
            <img src={`http://localhost:4000/${postInformation.cover}`} alt=""/>
            </div>
            <div dangerouslySetInnerHTML={{__html:postInformation.content}}/>
        </div>
      
    )
}