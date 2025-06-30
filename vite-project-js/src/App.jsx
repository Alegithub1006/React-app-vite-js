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

function App() {
  return (
    <section>
      <ArrayState />

    </section>
  );
}

export default App;
