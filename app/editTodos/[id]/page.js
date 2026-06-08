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

  const router =
    useRouter();

  useEffect(() => {

    const savedTodos =
      JSON.parse(
        localStorage.getItem(
          "todos"
        )
      );

    console.log(savedTodos);
    console.log(params.id);

    if (savedTodos) {
      setTodo(
        savedTodos[
          Number(params.id)
        ]
      );
    }

  }, [params.id]);

  const SaveTodo = () => {

  const savedTodos =
    JSON.parse(
      localStorage.getItem(
        "todos"
      )
    );

  savedTodos[
    Number(params.id)
  ] = todo;

  localStorage.setItem(
    "todos",
    JSON.stringify(
      savedTodos
    )
  );

  router.push("/");
};

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
  );
}