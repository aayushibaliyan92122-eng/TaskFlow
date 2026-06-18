"use client";
import React from "react";

import {
  useEffect,
  useState
} from "react";

import {
  useRouter
} from
"next/navigation"

import {
 useParams
}
from
"next/navigation"
 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

export default function EditTodo() {
 const params =  useParams()

  
  const [todo, setTodo] =
    useState("");

  const router =
 useRouter()


  // FIX: Added await to fetch call so it completes before redirect
  async function SaveTodo() {
  
  
  await fetch("/api/routes", {
  method: "PATCH",

  headers: {
    "Content-Type":
      "application/json"
  },

  body:
    JSON.stringify({
      id:
        params.id,

      title:
        todo
    })
})


console.log("clicked")
await router.push("/todospage")


}



useEffect(()=>{
async function getTodo() {
  const response =
 await fetch("/api/routes")
  const data = await response.json()

  const selectedTodo =
 data.todos.find(
   (todo) =>
     todo.id ===
     Number(params.id)
 )

 
if (selectedTodo) {
  setTodo(selectedTodo.title)
}
}




getTodo()
},[])

  return (
 
  <div className="min-h-[80vh]">

    <div className="container max-w-2xl mx-auto py-12 px-4">

    <Card className="bg-zinc-900 border-zinc-800 shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold">
            Edit Todo
          </CardTitle>

          <CardDescription>
            Update your task and save changes.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">

        <Input
  value={todo}
  onChange={(e) =>
    setTodo(e.target.value)
  }
  placeholder="Update your task..."
  className="
    bg-zinc-950
    border-zinc-700
  "
/>

<div className="flex gap-3">

  <Button
    onClick={SaveTodo}
    className="flex-1"
  >
    Save Changes
  </Button>

  <Button
    variant="outline"
    className="flex-1"
    onClick={() =>
      router.push("/todospage")
    }
  >
    Cancel
  </Button>

</div>


            <Button
  onClick={SaveTodo}
  className="
    w-full
    bg-blue-600
    hover:bg-blue-700
    text-white
  "
>
  Save Changes
</Button>

        </CardContent>
      </Card>

    </div>
  </div>
)

}
