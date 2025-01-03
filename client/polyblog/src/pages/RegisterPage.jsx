import { useState } from "react"
export default function RegisterPage(){

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    return (
        <form className="register">
            <h1>Register</h1>
            <input type="text" placeholder="username" value={username} onChange={ e => {setUsername(e.target.value)}} />
            <input type="password" placeholder="password" value={password} onChange={ e => {setPassword(e.target.value)}} />
            <button> Register Now </button>
        </form>
    )
}