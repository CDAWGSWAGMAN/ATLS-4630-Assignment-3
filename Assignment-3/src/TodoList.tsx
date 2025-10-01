import type { Todo } from "./TodoItem";
import { TodoItem } from "./TodoItem";

export function TodoList({
  items,
  onToggle,
  onDelete,
}: {
  items: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <ul className="list" role="list">
      {items.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
