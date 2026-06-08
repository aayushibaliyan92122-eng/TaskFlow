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

  // Add a new todo item when the user clicks the button
  const addTask = () => {
    if (task.trim() === "") return;
    setTodos((current) => [...current, task.trim()]);
    setTask("");
  };

  // Remove a todo item by index
  const removeTask = (index) => {
    setTodos((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  //editing todo item
 
  



     //get todos from localstorage
   useEffect(() => {


  const savedTodos =
    localStorage.getItem(
      "todos"
    );

  if (savedTodos) {
    setTodos(
      JSON.parse(savedTodos)
    );
  }
}, []);

  //adding todos in localstorage
  useEffect(() => {

    if (todos.length <= 0) {
      return; 
    }
  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
      );
   }, [todos]);



  return (
    <section className="page-content todo-page">
  
      <TodoHeader />
     <TodoForm addTask={addTask} task={task} setTask={setTask} />

     <TodoList todos={todos} removeTask={removeTask}  />

    </section>
  );
};

export default page;