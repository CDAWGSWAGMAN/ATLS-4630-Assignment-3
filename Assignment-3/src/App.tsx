// src/App.tsx
import "./app.css";
import { CounterHeader } from "./CounterHeader";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import type { Todo } from "./TodoItem";

const MOCK_TODOS: Todo[] = [
  { id: "1", title: "Blehhh", completed: true },
  { id: "2", title: "Blehh", completed: false },
];

export default function App() {
  const completed = MOCK_TODOS.filter(t => t.completed).length;

  return (
    <main className="wrapper" aria-label="To-Do List">
      <CounterHeader completed={completed} total={MOCK_TODOS.length} />
      <TodoInput />
      <TodoList items={MOCK_TODOS} />
    </main>
  );
}
