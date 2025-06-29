import { useState } from "react";

export function ArrayState() {
  const [array, setArray] = useState(["A", "B", "C","D",]);

  function RemoveFirtsElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }
  function RemoveSpecificElement(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }
    function AddNewElementStart(letter) {
        setArray (currentArray =>{
            return [letter, ...currentArray]
        })
    }
    function AddNewElementEnd(letter) {
        setArray (currentArray =>{
            return [...currentArray, letter]
        })
    }

  return (
    <div>
      <button onClick={RemoveFirtsElement}>remove first element</button>
      <br />
      <button onClick={() => RemoveSpecificElement("B")}>remove all B</button>
        <button onClick={() => AddNewElementStart("Y")}>add letter to start</button>
        <button onClick={() => AddNewElementEnd("x")}>add letter to end</button>
      <br />
      {array.join(", ")}
    </div>
  );
}
