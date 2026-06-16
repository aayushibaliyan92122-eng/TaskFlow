'use client'
import { useState , useEffect } from 'react'
import TodoList from '../components/Todolist';
import TodoForm from '../components/Todoform';
import TodoHeader from '../components/Todoheader';
import { useRouter } from 'next/navigation';

const page = () => {
  // State to keep track of the current task input
  const [task, setTask] = useState("");
  // State to keep track of the list of todos
  const [todos, setTodos] = useState([]);
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

fetch("/api/routes", {
 method: "DELETE",
 headers: {
   "Content-Type":
   "application/json"
 },
 body:
   JSON.stringify({
     id
   })
})
 getTodos()
}


//using useeefect for  this
useEffect(()=>{
  getUser()
},[])

  // Add a new todo item when the user clicks the button for POST
  async function handleAddTodo() {
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

  const data =
    await response.json();

  await getTodos();
  setTask("");

  console.log(todos)
}

 async function getTodos() {

    const response =
      await fetch("/api/routes");

    const data =
      await response.json();

    console.log(data);


    setTodos(data.todos);
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
 


  
// //GET TOODOS
// useEffect(() => {

//   getTodos();

// }, [])
 

    



  return (
    <section className="page-content todo-page">
  
      <TodoHeader />
     <TodoForm handleAddTask={handleAddTodo} task={task} setTask={setTask} />
      <TodoList
        todos={todos}
        deleteTodo = {deleteTodo}
        toggleTodo={toggleTodo}
        
      />
  
    </section>
  );
};

export default page