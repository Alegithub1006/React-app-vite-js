// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Gallery.jsx";
import "tailwindcss";

import { Gallery } from "./components/Gallery.jsx";
import { HeaderName, NameFunc } from "./components/ComponetsList.jsx";
import { TodoListItem } from "./components/TodoListItem.jsx";
import { Counter } from "./components/Counter.jsx";
import CounterClass from "./components/CounterClass.jsx";
import { ArrayState } from "./components/ArrayState.jsx";
import {TestInmutabilidad} from "./components/arrayTestArea.js";

function App() {
  return (
    <section>
      {/* <HeaderName>{"alejandro list to do"}</HeaderName>
      <NameFunc>
        <span>childrenProps</span>
      </NameFunc>
      <Gallery elements={"elemento props"} />
      <TodoListItem IsComplete={false}>todo list element one</TodoListItem>
      <div></div>
      <Counter />
      <br />
      <CounterClass />
      <br /> */}
      {/*<ArrayState />*/}
        <TestInmutabilidad/>
    </section>
  );
}

export default App;
