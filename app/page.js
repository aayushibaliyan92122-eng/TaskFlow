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
  const [editIndex, setEditIndex] =
  useState(null);

//deleting todo rooute fetchinng
async function deleteTodo (index){
fetch("/api/routes", {
 method: "DELETE",
 headers: {
   "Content-Type":
   "application/json"
 },
 body:
   JSON.stringify({
     index
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

  setTodos([
  ...todos,
  task
])

  console.log(todos)
}

 async function getTodos() {

    const response =
      await fetch("/api/routes");

    const data =
      await response.json();

    console.log(data.todos);

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