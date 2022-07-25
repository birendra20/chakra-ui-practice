import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

const StylesAndGradient = () => {
  return (
    <Box w="100%" h="100px" bgGradient="linear(to-r, green.200, pink.500)">
      <Button top="20%" bgGradient="linear(to-r, green.200, pink.500)">
        Clicky
      </Button>
    </Box>
  );
};

export default StylesAndGradient;
