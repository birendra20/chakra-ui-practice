import React, { useState } from "react";
import {
  Button,
  AspectRatio,
  Box,
  Flex,
  Container,
  Center,
  Heading,
  Input,
} from "@chakra-ui/react";

const MoveBoxUp = () => {
  const [offsetTop, setOffsetTop] = useState(300);

  function moveBoxUp() {
    setOffsetTop(offsetTop - 50);
  }
  return (
    <Box
      background={"blue.800"}
      borderRadius={"lg"}
      w="650px"
      height={650}
      m="auto"
    >
      <Button mx="250" my={50} onClick={moveBoxUp}>
        👆 Move Up 👆
      </Button>

      <Box
        width={100}
        height={100}
        background="blue"
        m={"auto"}
        transform={"translateY(250)"}
      >
        box
      </Box>
    </Box>
  );
};

export default MoveBoxUp;
