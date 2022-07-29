import React from "react";
import {
  Stack,
  HStack,
  VStack,
  Box,
  StackDivider,
  Heading,
  Text,
} from "@chakra-ui/react";

const StackT = () => {
  function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }

  return (
    <div>
      {/* <Stack direction={["column", "row"]} spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </Stack> */}

      {/* <VStack
        divider={
          <StackDivider borderColor="gray.200" border={"5px SOlid black"} />
        }
        spacing={4}
        align="stretch"
      >
        <Box h="40px" bg="yellow.200">
          1
        </Box>
        <Box h="40px" bg="tomato">
          2
        </Box>
        <Box h="40px" bg="pink.100">
          3
        </Box>
      </VStack> */}

      <Stack spacing={8} direction="row">
        <Feature
          title="Plan Money"
          desc="The future can be even brighter but a goal without a plan is just a wish"
        />
        <Feature
          title="Save Money"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
        />
      </Stack>
    </div>
  );
};

export default StackT;
