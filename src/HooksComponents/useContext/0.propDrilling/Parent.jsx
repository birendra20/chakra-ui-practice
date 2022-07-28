import { Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Component1 from "./components/Component1";

export default function ParentPropDrill() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Component1 count={count} />
      <Heading>{count}</Heading>

      <Button onClick={() => setCount(count + 1)}>Add</Button>
    </div>
  );
}
