import React, {useState} from "react"
import axios from "axios"
const Login = () =>{
    const [data, setData] = useState({
        email : "",
        password : ""
    });
    const handleChange = (e) =>{
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const login = () =>{
        axios.post("/login", data)
        .then(res => console.log(res))
    }
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h2>Login</h2>
            <input type="email" name = "email" value = {data.email} onChange={handleChange} placeholder="enter your email" autoComplete="off"/>
            <input type="password" name = "password" value = {data.password} onChange={handleChange} placeholder="enter your password" autoComplete="off"/>
            <button className="btn btn-primary" onClick={login}>Login</button>
        </div>
    )
}

export default Login