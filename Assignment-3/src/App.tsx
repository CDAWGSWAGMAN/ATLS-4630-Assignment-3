import "./app.css";
import { useState } from "react";
import { CounterHeader } from "./CounterHeader";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import type { Todo } from "./TodoItem";

const seed: Todo[] = [

];

export default function App() {
  
  const [todos, setTodos] = useState<Todo[]>(seed);
  const [inputValue, setInputValue] = useState("");

  
  function addTodo() {
    const title = inputValue.trim();
    if (!title) return;
    const next: Todo = {
      id: crypto.randomUUID?.() ?? String(Date.now()),
      title,
      completed: false,
    };
    setTodos((prev) => [next, ...prev]);
    setInputValue("");
  }

  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  
  const completed = todos.filter((t) => t.completed).length;

  return (
    <main className="wrapper" aria-label="To-Do List">
      <CounterHeader completed={completed} total={todos.length} />
      <TodoInput value={inputValue} onChange={setInputValue} onAdd={addTodo} />
      <TodoList items={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  );
}
