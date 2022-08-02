import React, { memo } from "react";
import { Button } from "@chakra-ui/react";

const Child = ({ counterTwo, handleIncreMentTwo }) => {
  console.log("child component rendered");
  return (
    <div>
      <Button onClick={handleIncreMentTwo}>child {counterTwo}</Button>
    </div>
  );
};

export default memo(Child);
