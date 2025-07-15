import {useState} from "react";
import CounterWithName from "../Projects/CounterWithName.jsx";


export default function LifeCicle(){
    const [show, setShow]= useState(true);

    const ChildComponent = show ? <CounterWithName/> : null;
    return (
        <div>
            <button onClick={()=>{ setShow(s => !s)}}>
                Show/Hide
            </button>
            {ChildComponent}
        </div>
    );

}