'use client'
import { useState , useEffect } from 'react'
import TodoList from './components/Todolist';
import TodoForm from './components/Todoform';
import TodoHeader from './components/Todoheader';

const page = () => {
  // State to keep track of the current task input
  const [task, setTask] = useState("");
  // State to keep track of the list of todos
  const [todos, setTodos] = useState([]);
  //state for editing todo feature
  const [editId, setEditId] =
  useState();



//deleting todo rooute fetchinng
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
//get todos
 async function getTodos() {

    const response =
      await fetch("/api/routes");

    const data =
      await response.json();

    console.log(data);


    setTodos(data.todos);
  }

//GET TOODOS
useEffect(() => {

  getTodos();

}, []);
 

  return (
    <section className="page-content todo-page">
  
      <TodoHeader />
     <TodoForm handleAddTask={handleAddTodo} task={task} setTask={setTask} />
      <TodoList
        todos={todos}
        deleteTodo = {deleteTodo}
        
      />
  
    </section>
  );
};

export default page;