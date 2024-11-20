import { useEffect, useState } from "react";
import { dummyData } from "../data/todos";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id, completed) {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
  }

  function addTodo(title) {
    setTodos((prevTodos) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  };
}
