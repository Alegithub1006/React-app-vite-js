import React, {useState, useEffect} from "react";


export function UseEffect(){
  function CounterWithName() {
    const [name, setName]= useState("");
    const [age, setAge]= useState(0);
    const [width, setWidth] = useState(window.innerWidth)

      useEffect(()=>{
          const handler=() => {
              console.log(name)
          }
          document.addEventListener("click", handler)

          return()=>{
              document.removeEventListener("click", handler)
          }
      }, [name])


      useEffect(()=>{
        console.log("change age", age)
    }, [age])

      useEffect(()=>{
          console.log("Mount")
      }, [])
      useEffect(()=>{
          document.title =name
      }, [name])
      useEffect(()=>{
          window.addEventListener("rezise", ()=>{
              console.log('change')
              setWidth(window.innerWidth)
          })
      }, [])



      function  HandleReduceNumber(){
        setAge((currentAge=>currentAge - 1))
    }
    function  HandleAddNumber(){
        setAge((currentAge=>currentAge + 1 ))
    }

    return(
        <div className={'flex flex-col gap-4 '}>
            <input className={'bg-gray-100 text-gray-800 border rounded-sm text-center'} type={'text'} value={name} onChange={e=> setName(e.target.value)}/>
            <div className={'flex gap-1 justify-center'}>
                <button onClick={HandleReduceNumber}>-</button>
                {age}
                <button onClick={HandleAddNumber}>+</button>
            </div>

            <p>hi my name is {name}, i am {age} years old</p>
            {width}
        </div>
    )
}
    return (<div><CounterWithName/></div>)
}
