import TodoItem from "./TodoItem";

export default function TodoList(todos) {
  const todosSorted = todos.todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onCompletedChange={todos.onCompletedChange} onDelete={todos.onDelete} />
        ))}
      </div>
      {todos.todos.length === 0 && <p className="text-center text-sm text-gray-500">No todos yet. Add a new one above.</p>}
    </>
  );
}
