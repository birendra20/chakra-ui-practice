import { Text } from "@chakra-ui/react";
import React from "react";
import Component5 from "./Component5";

export default function Component4({ count }) {
  return (
    <div className="child-box-4">
      <Component5 count={count} />
      <Text color={"white"}>C-4</Text>
    </div>
  );
}
