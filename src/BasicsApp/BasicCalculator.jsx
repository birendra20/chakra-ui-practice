import { Box, HStack, Input, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";

const BasicCalculator = () => {
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearDisplay = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <Box w="285px" h="500px">
      <Input placeholder="0" value={result} bg="blue.100" fontWeight={"bold"} />

      <SimpleGrid columns={4} bg={"purple"} color="white" m={0}>
        <Input as={"button"} value="9" onClick={clickHandler}>
          9
        </Input>
        <Input as={"button"} value="6" onClick={clickHandler}>
          8
        </Input>
        <Input as={"button"} value="7" onClick={clickHandler}>
          7
        </Input>
        <Input as={"button"} value="6" onClick={clickHandler}>
          6
        </Input>
        <Input as={"button"} value="5" onClick={clickHandler}>
          5
        </Input>
        <Input as={"button"} value="4" onClick={clickHandler}>
          4
        </Input>
        <Input as={"button"} value="3" onClick={clickHandler}>
          3
        </Input>
        <Input as={"button"} value="2" onClick={clickHandler}>
          2
        </Input>
        <Input as={"button"} value="1" onClick={clickHandler}>
          1
        </Input>
        <Input as={"button"} value="0" onClick={clickHandler}>
          0
        </Input>
        <Input as={"button"} value="." onClick={clickHandler}>
          .
        </Input>
        <Input as={"button"} value="+" onClick={clickHandler}>
          +
        </Input>
        <Input as={"button"} value="-" onClick={clickHandler}>
          -
        </Input>
        <Input as={"button"} value="*" onClick={clickHandler}>
          *
        </Input>

        <Input as={"button"} value="/" onClick={clickHandler}>
          /
        </Input>
        <Input as={"button"} value="%" onClick={clickHandler}>
          %
        </Input>
      </SimpleGrid>
      <SimpleGrid columns={2} bg={"black"} color="white" m={0}>
        <Input as={"button"} value="clear" onClick={clearDisplay}>
          Clear
        </Input>
        <Input as={"button"} value="=" onClick={calculate}>
          =
        </Input>
      </SimpleGrid>
    </Box>
  );
};

export default BasicCalculator;
