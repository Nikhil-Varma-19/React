import { useState,useContext } from "react"
import UserContext from "../context/UserContext"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

   const {setUser}=useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className="flex flex-col items-center">
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <br />
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
