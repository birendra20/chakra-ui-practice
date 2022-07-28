import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    startTimer();
  }, []);

  const startTimer = () => {
    ref.current = setInterval(() => {
      setCounter((p) => p + 1);
    }, 1000);
  };

  return (
    <div>
      <Heading mb="10px"> Timer:{counter}</Heading>
      <Button
        mr="5px"
        onClick={() => {
          clearInterval(ref.current);
        }}
      >
        Stop
      </Button>
      <Button mr="5px" onClick={startTimer}>
        Start
      </Button>
      <Button
        onClick={() => {
          clearInterval(ref.current);
          setCounter(0);
        }}
      >
        Reset
      </Button>
    </div>
  );
};

export default Timer;
