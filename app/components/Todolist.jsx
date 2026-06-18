

// import Link from "next/link";



// import { Button } from "@/components/ui/button";

// import {
//   Card,
//   CardContent
 
// } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";


// export default function TodoList({
//   todos,
//   deleteTodo,
//   toggleTodo,
// }) {
//   return (
//    <div className="space-y-3 mt-6">
   
//   {todos.map(todo)}

//   <Card className="bg-slate-900/80 border-slate-800">
//   <CardContent className="flex items-center justify-between p-5">
    
//     <div className="flex items-center gap-4">
//       <Checkbox
//         checked={todo.completed}
//         onCheckedChange={() => toggleTodo(todo)}
//       />

//       <span
//         className={`text-base ${
//           todo.completed
//             ? "line-through text-zinc-500"
//             : "text-zinc-100"
//         }`}
//       >
//         {todo.title}
//       </span>
//     </div>

//     <div className="flex items-center gap-2">
//       <Button
//         variant="outline"
//         size="sm"
//       >
//         Edit
//       </Button>

//       <Button
//         variant="destructive"
//         size="sm"
//       >
//         Delete
//       </Button>
//     </div>

//   </CardContent>
// </Card>

// </div>
//   );
// }


import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
}) {
  return (
    <div className="space-y-3 mt-6">
      {todos.map((todo) => (
        <Card
          key={todo.id}
          className="bg-slate-900/80 border-slate-800 hover:border-slate-700 transition-all"
        >
          <CardContent className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo)}
              />

              <span
                className={`text-base ${
                  todo.completed
                    ? "line-through text-zinc-500"
                    : "text-zinc-100"
                }`}
              >
                {todo.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Link href={`/editTodo/${todo.id}`}>
                <Button
                  variant="outline"
                  size="sm"
                >
                  Edit
                </Button>
              </Link>

              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

