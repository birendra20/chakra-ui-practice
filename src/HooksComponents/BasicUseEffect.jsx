import { useEffect, useState } from "react";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

const BasicEffect = () => {
  const [age, setAge] = useState(0);
  const handleClick = () => setAge(age + 1);

  useEffect(() => {
    document.title = "You are " + age + " years old!";
  });

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
        <Text> Look at the title of the current tab in your browser </Text>
      </Center>

      <Center>
        {" "}
        <Button onClick={handleClick}>Update Title!! </Button>
      </Center>
    </Box>
  );
};

export default BasicEffect;
