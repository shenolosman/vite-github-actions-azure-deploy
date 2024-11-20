export default function TodoSummary(todos) {
  const completedTodos = todos.todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button onClick={todos.deleteAllCompleted} className="text-red-500 hover:underline text-sm font-medium">
          Delete all completed
        </button>
      )}
    </div>
  );
}
