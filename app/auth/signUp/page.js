'use client'
 
import React from "react"
import { useState , useEffect } from "react"
import { useRouter } from "next/navigation"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const  SignUp=()=>{

  const [userData, setuserData] = useState({name: "" , password: "" , email: ""})
  const router = useRouter()

function handleChange(event) {
  setuserData({
    ...userData,
    [event.target.name]:
      event.target.value
  })
}

 // FIX: Check if signup was successful before redirecting
 async function handleRegister(){
 if (
  !userData.name ||
  !userData.email ||
  !userData.password
) {
  alert("All fields are required");
  return;
}

  const response = await fetch(
    "/api/auth/signUp",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        userData
      }),
    }
  );

  const res = await response.json();

  if(res.success) {
     router.push("/auth/login")
  } else {
    alert("Registration failed: " + res.message)
  }
}









    return (
  <div className="flex min-h-[80vh] items-center justify-center">

    <Card className="w-full max-w-md border-zinc-800 bg-zinc-900">

      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl font-bold">
          Create Account 🚀
        </CardTitle>

        <p className="text-sm text-zinc-400">
          Start organizing your tasks today.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">

        <Input
          name="name"
          type="text"
          placeholder="Full Name"
          value={userData.name}
          onChange={handleChange}
          className="bg-zinc-950 border-zinc-700"
        />

        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={userData.email}
          onChange={handleChange}
          className="bg-zinc-950 border-zinc-700"
        />

        <Input
          name="password"
          type="password"
          placeholder="Create Password"
          value={userData.password}
          onChange={handleChange}
          className="bg-zinc-950 border-zinc-700"
        />

        <Button
          onClick={handleRegister}
          className="w-full"
        >
          Create Account
        </Button>

        <div className="border-t border-zinc-800 pt-4 text-center">

          <p className="text-sm text-zinc-400 mb-3">
            Already have an account?
          </p>

          <Button
            variant="outline"
            className="w-full"
            onClick={() =>
              router.push("/auth/login")
            }
          >
            Login
          </Button>

        </div>

      </CardContent>

    </Card>

  </div>
);}

export default SignUp