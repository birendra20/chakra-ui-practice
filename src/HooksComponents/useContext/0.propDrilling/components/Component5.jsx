import { Heading, Text } from "@chakra-ui/react";

export default function Component5({ count }) {
  return (
    <div className="child-box-5">
      <Heading color={"white"}>{count}</Heading>
      <Text color={"white"}>C-5</Text>
    </div>
  );
}
