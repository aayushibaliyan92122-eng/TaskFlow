'use client';    
 import { useState } from 'react';



import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TodoForm({
  task,
  setTask,
  handleAddTask,
  disabled,
}) {
  return (
    <div className="flex gap-3 mb-8">
      <Input
        placeholder="Enter your task here..."
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />

      <Button
        onClick={handleAddTask}
        disabled={disabled}
      >
        Add Task
      </Button>
    </div>
  );
}