import { AspectRatio } from "@chakra-ui/react";
import "./App.css";

import MainBasicApp from "./BasicsApp/ZMainBasicApp";
import MainHooks from "./HooksComponents/ZMainHooks";
import MainConcept from "./ReactConcepts/Z.mainConcept";

function App() {
  return (
    <div className="App">
      {/* <MainBasicApp /> */}
      <MainHooks />
      {/* <MainConcept /> */}
    </div>
  );
}

export default App;
