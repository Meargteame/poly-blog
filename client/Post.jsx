import { Link } from "react-router-dom";
import {formatISO9075} from "date-fns";
export default function Post({_id,title,summary,cover,content,createdAt,updatedAt,author}) {
    return (
      <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
          <img
            src={'http://localhost:4000/'+ cover}
            alt="Random blog image from the internet"
          />
          </Link>
          
        </div> 
        <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
          
          
          <p className="info">
            <span className="author">{author.username}</span>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="summary">
           {summary}
          </p>
        </div>
      </div>
    );
  }
  