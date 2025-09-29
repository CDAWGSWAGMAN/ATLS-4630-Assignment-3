export type Todo = { id: string; title: string; completed: boolean };

export function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="item" aria-label={todo.title}>
      <div className="left">
        {/* static: visually looks like a checkbox; disabled for now */}
        <div className="checkbox" aria-hidden="true">{todo.completed ? "✓" : ""}</div>
        <span className={`title ${todo.completed ? "done" : ""}`}>{todo.title}</span>
      </div>
      <button className="delete" aria-disabled="true" title="Delete (disabled)">
         <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h18"/>
        <path d="M8 6v-.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V6"/>
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
        <path d="M10 11v6M14 11v6"/>
        </svg>
    </button>
    </li>
  );
}