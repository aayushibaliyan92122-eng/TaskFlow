'use client';    
 import { useState } from 'react';

 export default function TodoForm({
  task,
  setTask,
  handleAddTask
}) {

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Enter your task here"
        value={task}
        onChange={(event) =>
          setTask(event.target.value)
        }
      />

      <button onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}