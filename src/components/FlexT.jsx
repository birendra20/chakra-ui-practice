import React from "react";
import { Flex, Text, Circle, Image, Spacer, Center } from "@chakra-ui/react";

const FlexT = () => {
  return (
    <div>
      <Flex
        bgColor="teal.500"
        h={400}
        justify="space-around"
        align={"center"}
        flexGrow="2"
      >
        <Center w="100px" h="100px" bgColor="purple.800">
          <Text>Box1</Text>
        </Center>
        <Spacer />
        <Center w="100px" h="100px" bgColor="purple.100" mr={10}>
          <Text>Box2</Text>
        </Center>
        <Circle w="100px" h="100px" bgColor="purple.100" mr={10}>
          <Image
            src="https://bit.ly/2Z4KKcF"
            borderRadius="full"
            boxSize={100}
          />
        </Circle>
        <Center w="100px" h="100px" bgColor="purple.100" mr={10}>
          <Text>Box3</Text>
        </Center>
      </Flex>
    </div>
  );
};

export default FlexT;
