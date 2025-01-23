import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ refreshTrigger }) {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          setUsername(user);
        } else {
          setUsername(null);
        }
      })
      .catch((err) => {
        console.error("Error fetching user profile:", err);
      });
  }, [refreshTrigger]);

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    })
      .then((res) => {
        if (res.ok) {
          setUsername(null);
        } else {
          console.error("Logout failed.");
        }
      })
      .catch((err) => {
        console.error("Error logging out:", err);
      });
  };

  return (
    <header>
      <Link to="/" className="logo">
        Poly*Blog
      </Link>
      <nav>
        {username ? (
          <>
            <Link to="/create" className="btn register">
              Create New Post
            </Link>
            <a
              href="#"
              className="btn login"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/login" className="btn login">
              Login
            </Link>
            <Link to="/register" className="btn register">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
