import { Box, Center, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [word, setWord] = useState("Parent");
  return (
    <Box w="600" h="500" bg="skyblue">
      <Heading>{word}</Heading>
      <Center>
        <Child changeWord={(word) => setWord(word)} />
      </Center>
    </Box>
  );
};

export default Parent;
