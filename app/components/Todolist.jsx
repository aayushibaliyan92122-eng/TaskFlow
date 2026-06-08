 import Link from "next/link";
 
 export default function TodoList({ todos, removeTask }) {
    return (
 
 <div className="todo-list-card">
        <h2>Tasks</h2>
        {todos.length === 0 ? (
          <p className="todo-empty">No tasks yet. Add one to get started.</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                <span>{todo}</span>
                <button className="todo-remove-btn" onClick={() => removeTask(index)}>
                  Remove
                </button>
                <Link href={`/editTodos/${index}`}>
                   <button>Edit</button>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )}