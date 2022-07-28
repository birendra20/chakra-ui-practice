import { AspectRatio } from "@chakra-ui/react";
import "./App.css";

import MainBasicApp from "./BasicsApp/MainBasicApp";

import Adding from "./HooksComponents/Adding";
import BasicEffect from "./HooksComponents/BasicUseEffect";
import ArrayDepMount from "./HooksComponents/Effect2";
import FetchBook from "./HooksComponents/FetchBook";
import MoveBoxUp from "./HooksComponents/MoveBoxUp";
import CounterFnSetState from "./HooksComponents/State";

function App() {
  return (
    <div className="App">
      {" "}
      <MainBasicApp />{" "}
    </div>
  );
}

export default App;
