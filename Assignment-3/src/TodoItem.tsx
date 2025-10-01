export type Todo = { id: string; title: string; completed: boolean };

export function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <li className="item" aria-label={todo.title}>
      <div className="left">
        <button
          type="button"
          className="checkbox"
          aria-pressed={todo.completed}
          aria-label={todo.completed ? "Mark as not done" : "Mark as done"}
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? <span className="glyph">✓</span> : null}
        </button>
        <span className={`title ${todo.completed ? "done" : ""}`}>{todo.title}</span>
      </div>

      <button
        className="delete"
        aria-label={`Delete "${todo.title}"`}
        title="Delete"
        onClick={() => onDelete(todo.id)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 6h18"/><path d="M8 6v-.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V6"/>
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
          <path d="M10 11v6M14 11v6"/>
        </svg>
      </button>
    </li>
  );
}
