import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

const SimpleGridT = () => {
  return (
    // <SimpleGrid columns={5} spacing={10}>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    // </SimpleGrid>

    <SimpleGrid columns={[1, 2, 3, 4, 5]} spacingX="40px" spacingY="20px">
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
};

export default SimpleGridT;
