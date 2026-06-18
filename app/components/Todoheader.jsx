import { ListTodo } from "lucide-react";

export default function TodoHeader() {
  return (
    <div className="mb-8 space-y-3">
      
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-2">
          <ListTodo className="h-5 w-5 text-blue-500" />
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            My Tasks
          </h1>

          <p className="text-zinc-400 mt-1">
            Track, organize and complete your work efficiently.
          </p>
        </div>
      </div>

    </div>
  );
}