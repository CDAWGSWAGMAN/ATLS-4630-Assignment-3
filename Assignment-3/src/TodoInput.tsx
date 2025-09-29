export function TodoInput() {
  // static: no onChange/onClick yet
  return (
    <div className="card row">
      <input className="input" placeholder="Add a new task…" aria-label="Add a new task" />
      <button className="addBtn" aria-disabled="true" title="Add (disabled)">+</button>
    </div>
  );
}