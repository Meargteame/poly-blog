import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            {/* <a to="/" className='logo'>PolyBlog </a> */}
            <Link to='/' className="logo">PolyBlog</Link>
            <nav>
            <Link to='/login' > Login </Link>
            <Link to='/register' > Register  </Link>
            </nav>
      </header>
    )
}