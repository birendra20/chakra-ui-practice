import { Text } from "@chakra-ui/react";
import React from "react";
import Component4 from "./Component4";

export default function Component3({ count }) {
  return (
    <div className="child-box-3">
      <Component4 count={count} />
      <Text color={"white"}>C-3</Text>
    </div>
  );
}
