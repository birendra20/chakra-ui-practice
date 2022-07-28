import React, { useState } from "react";
import { Box, Flex, Container, Center, Heading, Input } from "@chakra-ui/react";

const Adding = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(Number(number1) + Number(number2));
  };

  return (
    <Box
      background={"blue.800"}
      borderRadius={"lg"}
      w="650px"
      height={650}
      m="auto"
    >
      <Flex justify={"space-evenly"}>
        <Input
          mt="100px"
          as="input"
          fontSize={30}
          color="black"
          width={100}
          height="100px"
          background={"lightblue"}
          type={"number"}
          value={number1}
          borderRadius={"lg"}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <Input
          mt="100px"
          as="input"
          color="black"
          fontSize={30}
          width={100}
          height="100px"
          bg="lightblue"
          type={"number"}
          value={number2}
          borderRadius={"lg"}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </Flex>
      <Flex direction={"column"}>
        <Box
          as="button"
          my={"15"}
          mx={"auto"}
          width={150}
          height="100px"
          bg={"skyblue"}
          alignContent="center"
          onClick={handleAdd}
          borderRadius={"lg"}
        >
          <Heading>Add</Heading>
        </Box>

        <Container
          mt={45}
          width={300}
          height="100px"
          bg={"skyblue"}
          alignContent="center"
          centerContent
          borderRadius={"lg"}
        >
          <Heading m={"auto"}>{result}</Heading>
        </Container>
      </Flex>
    </Box>
  );
};

export default Adding;
