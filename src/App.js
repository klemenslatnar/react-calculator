import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ClearBtn from "./components/ClearBtn";
import ZeroButton from "./components/ZeroButton";
import * as math from "mathjs";
import Equals from "./components/Equals";

function App() {
  const [result, setResult] = useState("");

  const clickHandler = (number) => {
    setResult((prevNum) => {
      return prevNum + number;
    });
  };

  const clearHandler = () => {
    setResult("");
  };

  const equalHandler = () => {
    const newResult = (math.evaluate(result)).toFixed(2);
    setResult(newResult);
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="result">{result}</div>
        <div className="top-row">
          <ClearBtn onClick={clearHandler}>AC</ClearBtn>
          <Button onClick={clickHandler}>/</Button>
        </div>
        <div className="row">
          <Button onClick={clickHandler}>7</Button>
          <Button onClick={clickHandler}>8</Button>
          <Button onClick={clickHandler}>9</Button>
          <Button onClick={clickHandler}>*</Button>
        </div>
        <div className="row">
          <Button onClick={clickHandler}>4</Button>
          <Button onClick={clickHandler}>5</Button>
          <Button onClick={clickHandler}>6</Button>
          <Button onClick={clickHandler}>-</Button>
        </div>
        <div className="row">
          <Button onClick={clickHandler}>1</Button>
          <Button onClick={clickHandler}>2</Button>
          <Button onClick={clickHandler}>3</Button>
          <Button onClick={clickHandler}>+</Button>
        </div>
        <div className="row">
          <ZeroButton onClick={clickHandler}>0</ZeroButton>
          <Button onClick={clickHandler}>.</Button>
          <Equals onEqual={equalHandler}>=</Equals>
        </div>
      </div>
    </div>
  );
}

export default App;
