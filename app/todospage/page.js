'use client'
import { useState , useEffect } from 'react'

import { Card,CardContent } from '@/components/ui/card';
import TodoList from '../components/Todolist';
import TodoForm from '../components/Todoform';
import TodoHeader from '../components/Todoheader';
import { useRouter } from 'next/navigation';

const page = () => {
  // State to keep track of the current task input
  const [task, setTask] = useState("");
  // State to keep track of the list of todos
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  //state for editing todo feature
  const [editId, setEditId] =
  useState();
const router = useRouter()

//finding userlogin or not
async function getUser(){
  const response = await fetch("/api/auth/me")

  const userid = await response.json()
  

  if(userid.success === false){
    
    router.push("/auth/login")
    return 
  }else{

  return userid.userinfo
  }
}

   
//deleting todo rooute fetchinng & toggling todo
async function deleteTodo (id){
  if (!confirm("Delete this todo?")) return

  const response = await fetch("/api/routes", {
    method: "DELETE",
    headers: {
      "Content-Type":
      "application/json"
    },
    body: JSON.stringify({ id })
  })

  if (response.ok) {
    alert("Todo deleted")
    getTodos()
  } else {
    alert("Unable to delete todo")
  }
}


// FIX: Call getTodos() on component mount to load initial todos
useEffect(()=>{
  getUser()
  getTodos() // Load todos when component mounts
},[])

  // Add a new todo item when the user clicks the button for POST
  async function handleAddTodo() {
    if (!task.trim()) {
      return
    }

    const response = await fetch(
      "/api/routes",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          title: task,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Todo created")
      setTask("")
      await getTodos();
    } else {
      alert(data.message || "Unable to create todo")
    }
  }

 async function getTodos() {
    setLoading(true)

    try {
      const response = await fetch("/api/routes");

      if(!response.ok){
        router.push("/auth/login")
        return
      }

      const data = await response.json();
      console.log(data);
      setTodos(data.todos || []);
    } finally {
      setLoading(false)
    }
  }

  //toggle todo
async function
toggleTodo(todo){


 await fetch("/api/routes", {
 method: "PATCH",
 headers: {
   "Content-Type":
   "application/json"
 },


 body:
    JSON.stringify({
      id: todo.id,
      completed: todo.completed
    })

})
getTodos()
}
 


  return (
 
   <section className="max-w-5xl mx-auto space-y-8">
  <TodoHeader />

  <TodoForm
    handleAddTask={handleAddTodo}
    task={task}
    setTask={setTask}
    disabled={!task.trim()}
  />

  {loading ? (
    <Card className="bg-zinc-900 border-zinc-800">
  <CardContent className="py-12 text-center text-zinc-400">
    Loading your tasks...
  </CardContent>
</Card>
  ) : todos.length === 0 ? (
    <Card className="bg-zinc-900 border-zinc-800">
  <CardContent className="flex flex-col items-center gap-3 py-12">
    <div className="text-4xl">📝</div>

    <h3 className="text-lg font-semibold">
      No tasks yet
    </h3>

    <p className="text-zinc-400">
      Create your first task and start being productive.
    </p>
  </CardContent>
</Card>
  ) : (
    
    <TodoList
    
      todos={todos}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
     
    />
   
  )}
</section>


    
  );
};

export default page