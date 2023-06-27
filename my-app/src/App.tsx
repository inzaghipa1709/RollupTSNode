import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Hello } from "@xg4/hello";

function App() {
  let hello = new Hello();
  let result = hello.say();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React: {result}
        </a>
      </header>
    </div>
  );
}

export default App;
