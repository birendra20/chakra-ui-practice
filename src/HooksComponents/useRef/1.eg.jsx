import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Input, Text, Center, Heading } from "@chakra-ui/react";

const UseRefEg = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  const inputElem = useRef("");
  const previousCounterRef = useRef("");

  console.log(inputElem);
  const resetInput = () => {
    setName("");
    inputElem.current.focus();
  };

  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);
  return (
    <div>
      <Box display={"flex"}>
        <Input
          ref={inputElem}
          name="name"
          autoComplete="off"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button onClick={resetInput}>Reset</Button>
      </Box>
      <Center>
        <Text>my name is {name}</Text>
      </Center>
      <Heading as={"h1"} size="md">
        Random Counter : {counter}
      </Heading>
      {typeof previousCounterRef.current !== undefined && (
        <h2>Previous Counter:{previousCounterRef.current}</h2>
      )}
      <Button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
        Generate Number
      </Button>
    </div>
  );
};

export default UseRefEg;
