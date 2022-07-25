import { AspectRatio } from "@chakra-ui/react";
import "./App.css";
import AspectRatios from "./components/AspectRatio";
import BoxT from "./components/Box";
import CenterT from "./components/CenterT";
import ContainerT from "./components/ContainerT";
import FlexT from "./components/FlexT";
import GridT from "./components/GridT";
import StylesAndGradient from "./components/StylesAndGradient";

function App() {
  return (
    <div className="App">
      {/* <StylesAndGradient />
      <AspectRatios />
      <BoxT />
      <CenterT /> */}
      {/* <ContainerT /> */}
      {/* <FlexT /> */}
      <GridT />
    </div>
  );
}

export default App;
