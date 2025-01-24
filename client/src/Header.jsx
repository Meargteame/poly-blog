import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header({ refreshTrigger }) {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userData) => {
        setUserInfo(userData); // Update userInfo state with the fetched data
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, [refreshTrigger, setUserInfo]);

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    })
      .then(() => {
        setUserInfo({}); // Clear the userInfo on logout (reset to empty object)
      })
      .catch((err) => console.error("Error logging out:", err));
  };

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        PolyBlog
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
