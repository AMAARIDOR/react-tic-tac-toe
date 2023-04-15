import "./App.css";
import { useState } from "react";

function Square({ value }) {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

function App() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default App;
