import { Heading, Text } from "@chakra-ui/react";
import Component3 from "./Component3";

export default function Component2({ count }) {
  return (
    <div className="child-box-2">
      <Component3 count={count} />

      <Text color={"white"}>C-2</Text>
    </div>
  );
}
