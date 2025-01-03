import { useState } from "react"

export default function RegisterPage(){
  
        const [username,setUsername] = useState('');
        const [password,setPassword] = useState('');  

        async function register(ev){
            ev.preventDefault()
            await fetch('https://localhost:4000',{
                method:'POST',
                body:JSON.stringify(username,password),
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }
      return (
          <form className="register" onSubmit={register}>
              <h1>Login</h1>
              <input type="text" value={username} placeholder="username"  onChange={ e => { setUsername(e.target.value)}}/>
              <input type="password" value={password} placeholder="password" onChange={ e => { setPassword(e.target.value)}}/> 
              <button> Login  </button>
          </form>
      )
  }