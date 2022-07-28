import Component2 from "./Component2";
import { useContext } from "react";
import { CountContext } from "../Parent";

export default function Component1() {
  const count = useContext(CountContext);
  return (
    <div className="child-box-1">
      <Component2 />
    </div>
  );
}
