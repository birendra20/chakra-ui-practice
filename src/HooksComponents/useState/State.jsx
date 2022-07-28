import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { useState } from "react";

const CounterFnSetState = () => {
  const [count, setCount] = useState(0);
  return (
    <Box
      m={"auto"}
      bg="gray"
      w="400px"
      h="200px"
      p="25"
      mt={100}
      borderRadius="20px"
    >
      <Center>
        <Heading>Count value is: {count}</Heading>
      </Center>
      <Center mt="15">
        <Button onClick={() => setCount(0)} mr="5px">
          Reset
        </Button>
        <Button onClick={() => setCount((prevCount) => prevCount + 1)} mr="5px">
          Plus (+)
        </Button>
        <Button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Minus (-)
        </Button>
      </Center>
    </Box>
  );
};

export default CounterFnSetState;
