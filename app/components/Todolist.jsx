

import Link from "next/link";

export default function TodoList({
  todos,
  deleteTodo
  
}) {
  return (
    <div className="todo-list-card">
      <h2>Tasks</h2>

      
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="todo-item"
            >
              <span>{todo}</span>

              <Link
                href={`/editTodos/${index}`}
              >
                <button>
                  Edit
                </button>
              </Link>
              <button onClick={() =>
                                deleteTodo(index) 
                              } >Delete</button>
            </li>
          ))}
        </ul>
     
    </div>
  );
}

