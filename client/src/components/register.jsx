import React, {useState} from "react"
import axios from "axios"
const Register = () =>{
    const [data, setData] = useState({
        name : "",
        email : "",
        password : "",
        cpassword : ""
    });
    const handleChange = e =>{
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const register = () =>{
        const { name, email, password, cpassword } = data
        if( name && email && password && (password === cpassword)){
            axios.post("/register", data)
            .then( res => console.log(res))
        } else {
            alert("Invlid input")
        }
    }
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h2>Register</h2>
            <input type="text" name = "name" value = {data.name} onChange={handleChange} placeholder="enter your name" autoComplete="off"/>
            <input type="email" name = "email" value = {data.email} onChange={handleChange} placeholder="enter your email" autoComplete="off"/>
            <input type="password" name = "password" value = {data.password} onChange={handleChange} placeholder="enter your password" autoComplete="off"/>
            <input type="password" name = "cpassword" value = {data.cpassword} onChange={handleChange} placeholder="enter password again" autoComplete="off"/>
            <button className="btn btn-primary" onClick={register}>Register</button>
        </div>
    )
}

export default Register