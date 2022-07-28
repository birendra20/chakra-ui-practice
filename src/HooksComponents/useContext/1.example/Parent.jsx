import { Button, Heading } from "@chakra-ui/react";
import React, { useState, createContext } from "react";
import Component1 from "./components/Component1";

export const CountContext = createContext(0);

export default function ParentContext() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <Component1 />
      <Heading>{count}</Heading>
      <Button onClick={() => setCount(count + 1)}>Add</Button>
    </CountContext.Provider>
  );
}
