

export function CounterHeader({ completed, total }: { completed: number; total: number }) {
  return (
    <div className="header">
      <h1>To-Do List</h1>
      <div className="subtle">{completed} of {total} completed</div>
    </div>
  );
}
