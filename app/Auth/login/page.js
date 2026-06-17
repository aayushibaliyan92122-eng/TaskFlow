'use client'


import React from "react";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";



const login = ()=>{

 const [loginData, setloginData] = useState({password: "" , email: ""})
 const router = useRouter()


function loginHandle(event){
    setloginData({...loginData, [event.target.name]: event.target.value})
}
 
 async function loginButton(){

  const response= await fetch(
    "/api/auth/login",
{
   method : "POST",
    headers:{
        "Content-Type":
            "application/json"

    },
    body: JSON.stringify(
       { loginData}
    )

    }

    )
   
    console.log(loginData)
   const res =await response.json()

   // FIX: Only redirect if login was successful, else show error message
   if(res.success===true){
    console.log(res.message)
    router.push("/")
}else{
    console.log(res.message)
    alert("Login failed: " + res.message)
}
}

async function SignUp() {
    router.push("/auth/signUp")
    
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
type="password"
placeholder="enter your password"
value={loginData.password}
onChange={loginHandle}
/>

<button onClick={loginButton}>login</button>


<h5>Don't have an account?</h5>
<button onClick={SignUp}>
  Create Account
</button>

</>
)
}


export default login