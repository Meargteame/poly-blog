import { Link } from "react-router-dom";


export default function (){
    return (
        <header>
            <Link to="/" className="logo">Poly-Blog</Link>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>

    )
}

