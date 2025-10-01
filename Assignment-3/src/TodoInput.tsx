export function TodoInput({
  value,
  onChange,
  onAdd,
}: {
  value: string;
  onChange: (v: string) => void;
  onAdd: () => void;
}) {
  const disabled = value.trim().length === 0;

  return (
    <div className="card row">
      <input
        className="input"
        placeholder="Add a new task…"
        aria-label="Add a new task"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !disabled) onAdd();
        }}
      />
      <button
        className="addBtn"
        disabled={disabled}
        aria-disabled={disabled}
        title={disabled ? "Enter a task first" : "Add task"}
        onClick={onAdd}
      >
        +
      </button>
    </div>
  );
}
