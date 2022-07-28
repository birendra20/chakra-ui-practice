import { Text } from "@chakra-ui/react";
import Component2 from "./Component2";

export default function Component1({ count }) {
  return (
    <div className="child-box-1">
      <Component2 count={count} />
      <Text color={"white"}>C-1</Text>
    </div>
  );
}
