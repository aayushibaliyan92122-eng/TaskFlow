'use client'
import "dotenv/config";

console.log("DATABASE_URL =", process.env.DATABASE_URL);

import React from "react";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CardHeader,CardTitle,CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const login = ()=>{

 const [loginData, setloginData] = useState({password: "" , email: ""})
 const [loading, setLoading] = useState(false)
 const [error, setError] = useState("")
 const router = useRouter()

 useEffect(() => {
   async function redirectIfLoggedIn() {
     const response = await fetch('/api/auth/me')
     if (response.ok) {
       router.push('/dashboard')
     }
   }
   redirectIfLoggedIn()
 }, [router])

function loginHandle(event){
    setloginData({...loginData, [event.target.name]: event.target.value})
}
 
 async function loginButton(){
  setLoading(true)
  setError("")

  try {
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

    const res = await response.json()

    if (!response.ok) {
      setError(res.message || "Invalid email or password")
      return
    }

    if(res.success === true){
      router.push("/dashboard")
    } else {
      setError(res.message || "Login failed")
    }
  } catch (error) {
    setError("Unexpected error logging in")
    console.error("loginButton error:", error)
  } finally {
    setLoading(false)
  }
}

async function SignUp() {
    router.push("/auth/signUp")
    
}


return(

<>

<div className="max-w-5xl mx-auto px-6 py-10">


<Card className="w-400px">
  <CardHeader>
    <CardTitle>Login</CardTitle>
  </CardHeader>

  <CardContent className="space-y-4">
    <Input
      name="email"
type="text"
placeholder="enter your email"
value={loginData.email}
onChange={loginHandle}
    />

    <Input
     name="password"
type="password"
placeholder="enter your password"
value={loginData.password}
onChange={loginHandle}
    />
<Button
  className="w-full"
  onClick={loginButton}
  disabled={loading}
>
  {loading ? "Logging in..." : "Login"}
</Button>


    {error && <p style={{ color: 'red' }}>{error}</p>}

    <h5>Don't have an account?</h5>
<button className="w-full" onClick={SignUp}>
  Create Account
</button>
  </CardContent>
</Card>


</div>
</>
)
}


export default login


{/* <>
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

<button onClick={loginButton} disabled={loading}>
  {loading ? "Logging in..." : "Login"}
</button>
{error && <p style={{ color: 'red' }}>{error}</p>}

<h5>Don't have an account?</h5>
<button onClick={SignUp}>
  Create Account
</button>

</> */}