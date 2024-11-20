import { useState } from "react";

export default function AddTodoForm(todo) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) return;

    todo.onSubmit(input);
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">
        Add
      </button>
    </form>
  );
}
