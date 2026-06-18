'use client'


import React from "react";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CardHeader,CardTitle,CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const loginPage = ()=>{

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

return (
  <div className="flex min-h-[80vh] items-center justify-center">

    <Card className="w-full max-w-md border-zinc-800 bg-zinc-900">
      
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl font-bold">
          Welcome Back 👋
        </CardTitle>

        <p className="text-sm text-zinc-400">
          Login to continue managing your tasks
        </p>
      </CardHeader>

      <CardContent className="space-y-4">

        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={loginData.email}
          onChange={loginHandle}
          className="bg-zinc-950 border-zinc-700"
        />

        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={loginData.password}
          onChange={loginHandle}
          className="bg-zinc-950 border-zinc-700"
        />

        <Button
          className="w-full"
          onClick={loginButton}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        {error && (
          <p className="text-sm text-red-500 text-center">
            {error}
          </p>
        )}

        <div className="border-t border-zinc-800 pt-4 text-center">

          <p className="text-sm text-zinc-400 mb-3">
            Don't have an account?
          </p>

          <Button
            variant="outline"
            className="w-full"
            onClick={SignUp}
          >
            Create Account
          </Button>

        </div>

      </CardContent>
    </Card>

  </div>
)
</>
)
}


export default loginPage


