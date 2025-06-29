import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function HandleClick() {
    setCount((Count) => Count + 1);
  }
  function HandleClickReset() {
    setCount(() => 0);
  }

  return (
    <div>
      <button onClick={HandleClick}>counter {count}</button>
      <button onClick={HandleClickReset}>reset </button>
    </div>
  );
}
