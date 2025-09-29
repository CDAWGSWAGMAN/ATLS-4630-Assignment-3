export function CounterHeader(props: { completed: number; total: number }) {
  return (
    <div className="header">
      <h1>To-Do List</h1>
      <div className="subtle">{props.completed} of {props.total} completed</div>
    </div>
  );
}