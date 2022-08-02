import { Button } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

import Child from "./Child";

const ParentUsecallbackEg1 = () => {
  const [CounterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const handleIncreMent = () => {
    setCounterOne(CounterOne + 1);
  };
  const handleIncreMentTwo = useCallback(() => {
    setCounterTwo(counterTwo + 1);
  }, [counterTwo]);

  return (
    <div>
      <Child counterTwo={counterTwo} handleIncreMentTwo={handleIncreMentTwo} />
      <Button onClick={handleIncreMent}>Parent :{CounterOne}</Button>
    </div>
  );
};

export default ParentUsecallbackEg1;
