import { useState } from "react";

export function ArrayState() {
  const [array, setArray] = useState(["A", "B", "C","D",]);
  const  [value, setValue]= useState("")

  function RemoveFirtsElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }
  function ClearAllElement() {
      setArray([])
  }
  function ResetElementListToStart(){
      setArray( ["A", "B", "C","D",])
  }
  function RemoveSpecificElement(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }
  function ChangeElement(){
      setArray(currentArray=>{
          return currentArray.map(letter =>{
              if (letter === "A") return "H"
                  return letter
          })
      })

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
      <button onClick={() => RemoveSpecificElement("B")}>remove all B</button>
        <button onClick={() => AddNewElementStart("Y")}>add letter to start</button>
        <button onClick={() => AddNewElementEnd("X")}>add letter to end</button>
        <button onClick={ClearAllElement}>CLear All list </button>
        <button onClick={ResetElementListToStart}>Reset list to start</button>
        <button onClick={() => ChangeElement("A","M")}>Change A by 'M'</button>
        <br/>
        <br/>
        <input value={value} onChange={e =>setValue(e.target.value)}/>
        <button onClick={()=>{AddNewElementStart(value)}}>add value to array</button>

    <div></div>
        {array.join(", ")}
    </div>
  );
}
