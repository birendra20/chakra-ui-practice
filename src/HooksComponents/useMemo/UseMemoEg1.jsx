import { Button } from "@chakra-ui/react";
import React, { useState, useMemo } from "react";

function UseMemoEg1() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <Button onClick={incrementCOne}>Count One - {counterOne}</Button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <Button onClick={incrementCTwo}>Count Two - {counterTwo}</Button>
      </div>
    </div>
  );
}
export default UseMemoEg1;
