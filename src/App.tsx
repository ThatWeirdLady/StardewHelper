import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";
import logo from "./logo.svg";
import "./App.css";
import tigertrout from "./images/Tiger_Trout.png";
import caughtSlice, {
  catchFish,
  releaseFish,
  useIsFishCaught,
} from "./features/caught/caught-slice";

// console.log(tigertrout);

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const isCaught = useIsFishCaught("Pufferfish");
  function handleClick() {
    // increment by 1
    // dispatch(incremented());

    // increment by a fixed amount
    dispatch(amountAdded(3));
  }

  function clickFish() {
    if (!isCaught) {
      dispatch(catchFish("Pufferfish"));
    } else {
      dispatch(releaseFish("Pufferfish"));
    }
    console.log(isCaught);
  }

  console.log("yup it's wokring");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={handleClick}>count is: {count}</button>
        </p>
        <p>Hey, Use Redux on Fish</p>
        <p>
          <button onClick={clickFish}>IS CAUGHT:{String(isCaught)}</button>
        </p>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
