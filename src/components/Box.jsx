import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";

const BoxT = () => {
  return (
    <Box
      w="100%"
      h="400px"
      bgColor="pink.500"
      p={2}
      display="flex"
      justifyContent="space-evenly"
    >
      <AspectRatio flexGrow={5} ratio={0.5 / 2} maxWidth="350px">
        <Box
          maxW="350px"
          bgColor={"orange"}
          p={2}
          borderTopRadius={4}
          border="solid 2px black"
          display={"flex"}
          flexDirection="column"
        >
          <Box as="h2" fontSize={40}>
            Welcome to my Home
            <img src="https://bit.ly/2Z4KKcF" alt="" srcset="" />
          </Box>
        </Box>
      </AspectRatio>
      <Box
        as="button"
        bgColor={"purple"}
        alignSelf="center"
        border={"2px solid black"}
        p={4}
        color="white"
      >
        Click me
      </Box>
    </Box>
  );
};

export default BoxT;
