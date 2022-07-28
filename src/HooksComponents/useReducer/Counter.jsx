import React, { useReducer } from "react";
import { Box, AspectRatio, Button, Heading } from "@chakra-ui/react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("unexpexted action");
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Heading>Counter:{count}</Heading>
      <Button
        onClick={() => {
          dispatch("add");
        }}
      >
        increment
      </Button>
      <Button
        onClick={() => {
          dispatch("subtract");
        }}
      >
        decrement
      </Button>
      <Button
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </Button>
    </div>
  );
};

export default Counter;
