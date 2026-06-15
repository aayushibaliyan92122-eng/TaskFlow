import React from "react";
import { useEffect,useState } from "react";


const Login = ()=>{

 const [loginData, setloginData] = useState({password: "" , email: ""})


function loginHandle(event){
    setloginData({...loginData, [event.target.name]: event.target.value})
}
 
function loginButton(){
    console.log(loginData)
}


return(
<>
<h1>Login Page</h1>
<input 
name="email"
type="text"
placeholder="enter your email"
value={loginData.email}
onChange={loginHandle}
/>

<input
name="password"
type="text"
placeholder="enter your password"
value={loginData.password}
onChange={loginHandle}
/>

<button onClick={loginButton}>login</button>

</>
)
}


export default Login