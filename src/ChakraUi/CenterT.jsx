import React from "react";
import { Center, Square, Circle, Box } from "@chakra-ui/react";

const CenterT = () => {
  return (
    <Square bgColor="gray.100">
      <Square bgColor="pink.800" w="200px" h="200px">
        <Center>
          <Square bgColor="pink.400" w="100px" h="100px" marginTop="auto">
            <Circle as="button" w="50px" h="50px" bgColor="pink.200">
              Box
            </Circle>
          </Square>
        </Center>
      </Square>
    </Square>
  );
};

export default CenterT;
