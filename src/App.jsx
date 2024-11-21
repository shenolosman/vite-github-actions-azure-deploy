import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, addTodo, setTodoCompleted, deleteTodo, deleteAllCompletedTodos } = useTodos();

  return (
    <main className="h-screen flex flex-col">
    <section className="flex-grow py-10 space-y-5 overflow-y-auto justify-center">
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <h1 className="font-bold text-3xl text-center">Your Todos</h1>
        <AddTodoForm onSubmit={addTodo} />
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo} />
        <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />
      </div>
    </section>
  
    <footer className="text-center text-sm py-2">
      <p>
        Created by&nbsp;
        <a href="https://github.com/shenolosman" target="_blank" rel="noopener noreferrer" className="underline">
          Shenol Osman
        </a>{" "}
        - {new Date().getFullYear()}
      </p>
    </footer>
  </main>
  
  );
}

export default App;
