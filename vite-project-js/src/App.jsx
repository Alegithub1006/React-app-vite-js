// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Gallery.jsx";


import { Gallery } from "./components/Gallery.jsx";
import { HeaderName, NameFunc } from "./components/ComponetsList.jsx";
import { TodoListItem } from "./components/TodoListItem.jsx";
import { Counter } from "./components/Counter.jsx";
import CounterClass from "./components/CounterClass.jsx";
import { ArrayState } from "./components/ArrayState.jsx";
import {TestInmutabilidad} from "./components/arrayTestArea.jsx";
import CounterWithName, {UserProfile} from "./Projects/CounterWithName.jsx";
import LifeCicle from "./Projects/useEffectHook.jsx";
import {UseEffect} from "./components/useEffect.jsx";
import ToDoList from "./Projects/TodoList.jsx";

function App() {
  return (
    <section>
      <ToDoList/>

    </section>
  );
}

export default App;
