
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter)

  const increment = () => {
    dispatch({type: "INCREMENT", payload: counter})
  }

  const decrement = () => {
    dispatch({ type: "INCREMENT", payload: counter });
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App
