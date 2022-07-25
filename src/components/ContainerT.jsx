import React from "react";
import { Container, Box, Square, Circle } from "@chakra-ui/react";

const ContainerT = () => {
  return (
    //     <div>
    //       {/* <Container maxW="container.xl" bgColor="blackAlpha.100" centerContent>
    //         extra large Container
    //       </Container>
    //       <Container maxW="container.lg" bgColor="blackAlpha.200" centerContent>
    //         "large" Container
    //       </Container>
    //       <Container maxW="container.md" bgColor="blackAlpha.300" centerContent>
    //         "md" Container
    //       </Container>
    //       <Container maxW="container.sm" bgColor="blackAlpha.400" centerContent>
    //         "sm" Container
    //       </Container>
    //       <Container m bgColor="red.500" centerContent>
    //         content
    //       </Container> */}
    // </div>
    <Container maxW="100%" bgColor="blackAlpha.500">
      <Box
        display="flex"
        flexDirection="row"
        alignContent="space-evenly"
        w="100%"
      >
        <Square bgColor="whiteAlpha.500" flexGrow="2" maxW="50%">
          <img src="https://bit.ly/2Z4KKcF" alt="" />
        </Square>
        <Square bgColor="whiteAlpha.500" flexGrow="2" maxW="50%">
          <Circle w="200px" h="200px" bgColor="orange.200">
            Boop me
          </Circle>
        </Square>
      </Box>
    </Container>
  );
};

export default ContainerT;
