"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TodoForm({
  task,
  setTask,
  handleAddTask,
  disabled,
}) {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 sm:flex-row">
        
        <Input
          placeholder="What needs to be done today?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border-zinc-700 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
        />

        <Button
          onClick={handleAddTask}
          disabled={disabled}
          className="sm:w-auto"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>

      </div>
    </div>
  );
}