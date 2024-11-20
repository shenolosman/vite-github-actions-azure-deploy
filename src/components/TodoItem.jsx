import { Trash2 } from "lucide-react";

export default function TodoItem(todo) {
    
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          checked={todo.todo.completed}
          onChange={(e) => todo.onCompletedChange(todo.todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.todo.completed ? "line-through text-gray-400" : ""}>{todo.todo.title}</span>
      </label>
      <button onClick={() => todo.onDelete(todo.todo.id)} className="p-2">
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
