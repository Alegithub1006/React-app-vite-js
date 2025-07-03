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
        <div className={'flex flex-wrap gap-2'}>
      <button onClick={RemoveFirtsElement}>remove first element</button>
        <div className={'w-2 h-10'}></div>
      <button onClick={() => RemoveSpecificElement("B")}>remove all B</button>
        <div className={'w-2 h-10'}></div>
        <button onClick={() => AddNewElementStart("Y")}>add letter to start</button>
        <div className={'w-2 h-10'}></div>
        <button onClick={() => AddNewElementEnd("X")}>add letter to end</button>
        <div className={'w-2 h-10'}></div>
        <button onClick={ClearAllElement}>CLear All list </button>
        <div className={'w-2 h-10'}></div>
        <button onClick={ResetElementListToStart}>Reset list to start</button>
        <div className={'w-2 h-10'}></div>
        <button onClick={() => ChangeElement("A","M")}>Change A by 'M'</button>
        <div className={'w-2 h-10'}></div>
        <input className={'bg-blue-500'} type={'text'} value={value} onChange={e =>setValue(e.target.value)}/>
        <button onClick={()=>{AddNewElementStart(value)}}>add value to array</button>

    </div>
        {array.join(", ")}
    </div>
  );
}
