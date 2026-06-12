

import Link from "next/link";

export default function TodoList({
  todos,
  deleteTodo,
}) {
  return (
    <div className="todo-list-card">
      <h2>Tasks</h2>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="todo-item"
          >
            <span>
              {todo.title}
            </span>

            <button
              onClick={() =>
                deleteTodo(todo.id)
              }
            >
              Delete
            </button>
          <Link
              href={`/editTodo/${todo.id}`}
              >
             <button>
              Edit
             </button>
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

