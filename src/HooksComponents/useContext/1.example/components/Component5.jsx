import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { CountContext } from "../Parent";

export default function Component5() {
  const count = useContext(CountContext);

  return (
    <div className="child-box-5">
      <Heading color="white">{count}</Heading>
    </div>
  );
}
