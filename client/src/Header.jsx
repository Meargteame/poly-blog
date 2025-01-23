
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">Poly*Blog</Link>
      <nav>
        <Link to="/login" className="btn login">Login</Link>
        <Link to="/register" className="btn register">Register</Link>
      </nav>
    </header>
  );
}

