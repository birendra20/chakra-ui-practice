import { AspectRatio } from "@chakra-ui/react";
import "./App.css";

import MainBasicApp from "./BasicsApp/ZMainBasicApp";
import MainHooks from "./HooksComponents/ZMainHooks";

function App() {
  return (
    <div className="App">
      {" "}
      {/* <MainBasicApp />{" "} */}
      <MainHooks />
    </div>
  );
}

export default App;
