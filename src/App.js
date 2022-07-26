import { AspectRatio } from "@chakra-ui/react";
import "./App.css";
import AspectRatios from "./components/AspectRatio";
import BoxT from "./components/Box";
import CenterT from "./components/CenterT";
import ContainerT from "./components/ContainerT";
import FlexT from "./components/FlexT";
import GridT from "./components/GridT";
import SimpleGridT from "./components/SimpleGridT";
import StackT from "./components/StackT";
import StylesAndGradient from "./components/StylesAndGradient";
import Adding from "./HooksComponents/Adding";
import BasicEffect from "./HooksComponents/BasicUseEffect";
import FetchBook from "./HooksComponents/FetchBook";
import MoveBoxUp from "./HooksComponents/MoveBoxUp";
import CounterFnSetState from "./HooksComponents/State";

function App() {
  return (
    <div className="App">
      {/* <StylesAndGradient />
      <AspectRatios />
      <BoxT />
      <CenterT /> */}
      {/* <ContainerT /> */}
      {/* <FlexT /> */}
      {/* <GridT /> */}
      {/* <Adding /> */}
      {/* <MoveBoxUp /> */}
      {/* <FetchBook /> */}
      {/* <SimpleGridT /> */}
      {/* <StackT /> */}
      {/* <CounterFnSetState /> */}
      <BasicEffect />
    </div>
  );
}

export default App;
