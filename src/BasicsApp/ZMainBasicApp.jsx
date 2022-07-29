import React from "react";
import BasicCalculator from "./BasicCalculator";
import LiveClock from "./LiveClock";
import Timer from "./Timer/Timer";
import TodoApp from "./TodoApp";

import { Grocery } from "./todoApp/Grocery";
import Adding from "./TwoNumber";

const MainBasicApp = () => {
  return (
    <div>
      {/* <Grocery /> */}

      {/* <Timer /> */}
      {/* <LiveClock /> */}
      {/* <TodoApp /> */}
      <Adding />
      <BasicCalculator />
    </div>
  );
};

export default MainBasicApp;
