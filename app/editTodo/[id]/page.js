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
 



export default function EditTodo() {
 const params =  useParams()

  
  const [todo, setTodo] =
    useState("");

  const router =
 useRouter()


  //editing todos
async function SaveTodo() {
  
  
  fetch("/api/routes", {
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
router.push("/todospage")


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

 
 setTodo(selectedTodo.title)
 console.log(selectedTodo)
}




getTodo()
},[])

  return (
    <div>
      <h1>Edit Todo</h1>

      <input
        type="text"
        value={todo}
        onChange={(event) =>
          setTodo(
            event.target.value
          )
        }
      />

      <button onClick={SaveTodo}>
        Save
      </button>
    </div>
  )}
