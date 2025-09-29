import type { Todo } from "./TodoItem";
import { TodoItem } from "./TodoItem";

export function TodoList({ items }: { items: Todo[] }) {
  return (
    <ul className="list" role="list">
      {items.map(t => <TodoItem key={t.id} todo={t} />)}
    </ul>
  );
}