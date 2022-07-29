import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const GridT = () => {
  return (
    <div>
      {/* <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="20px">
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid> */}
      {/* <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        mt="20px"
        border="2px solid black"
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="papayawhip" />
      </Grid> */}

      {/* <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={1} h="10" bg="tomato" border="2px solid black" />
        <GridItem colSpan={1} h="10" bg="tomato" border="2px solid black" />
        <GridItem
          colStart={3}
          colEnd={6}
          h="10"
          bg="papayawhip"
          border="2px solid black"
        />
      </Grid> */}

      {/* <Grid
        templateAreas={`"header header"
                  "nav  main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid> */}
      <ColorGame />
    </div>
  );
};

function ColorGame() {
  const colors = ["gray", "teal", "purple", "pink", "red", "orange"];

  const [index, setIndex] = useState(0);

  const changeColor = () => {
    index >= colors.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <>
      <Grid templateColumns="repeat(6,1fr)" gap={6}>
        <GridItem colSpan={5} h="10" bg="pink.500">
          <Grid templateColumns="repeat(6,1fr)" gap={0}>
            <GridItem colSpan={1} h={10} bg={colors[index] + ".100"}></GridItem>
            <GridItem colSpan={1} h={10} bg={colors[index] + ".200"}></GridItem>
            <GridItem colSpan={1} h={10} bg={colors[index] + ".300"}></GridItem>
            <GridItem colSpan={1} h={10} bg={colors[index] + ".400"}></GridItem>
            <GridItem colSpan={1} h={10} bg={colors[index] + ".500"}></GridItem>
            <GridItem colSpan={1} h={10} bg={colors[index] + ".600"}></GridItem>
          </Grid>
        </GridItem>
        <GridItem
          as="button"
          colSpan={1}
          h="10"
          bg="purple"
          onClick={() => changeColor()}
          color="white"
        >
          Colorize
        </GridItem>
      </Grid>
    </>
  );
}

export default GridT;
