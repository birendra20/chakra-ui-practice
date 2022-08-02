import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React from "react";

const Child = (props) => {
  return (
    <Box w="300" h="250" bg="blue" mt="100">
      <Center d="flex" flexDirection={"column"} mt="25">
        <Heading>Child</Heading>
        <Button onClick={() => props.changeWord("birendra")}>
          Click to Change Title
        </Button>
      </Center>
    </Box>
  );
};

export default Child;
