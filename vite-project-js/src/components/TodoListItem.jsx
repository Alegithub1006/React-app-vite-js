export function TodoListItem({ children, IsComplete }) {
  return (
    <label>
      <input type="checkbox" name="list" id="list" checked={IsComplete} />
      {children}
    </label>
  );
}
