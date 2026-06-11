"use client";

import {
  useRouter
} from "next/navigation";

import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "next/navigation";

export default function EditTodo() {

  const [todo, setTodo] =
    useState("");

  const params =
    useParams();

  return (
    <div>
      <h1>Edit Todo</h1>

      <input
        type="text"
        value={todo}
        onChange={(event) =>
          setTodo(
            event.target.value
          )
        }
      />

      <button onClick={SaveTodo}>
        Save
      </button>
    </div>
  )}
