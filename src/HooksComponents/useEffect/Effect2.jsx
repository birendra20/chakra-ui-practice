import { Box, Button, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ArrayDepMount = () => {
  const [randomNumber, setRandomNumber] = useState(10);
  const [effectLogs, setEffectLogs] = useState([]);

  useEffect(() => {
    setEffectLogs((prevEffectLogs) => [
      ...prevEffectLogs,
      "effect fn has been invoked",
    ]);
  }, []);

  return (
    <Box m={"auto"} bg="gray.600" w="400px" p="25" mt={100} borderRadius="20px">
      <Heading>{randomNumber}</Heading>
      <Button
        onClick={() => {
          setRandomNumber(Math.floor(Math.random()));
        }}
      >
        Generate random number!
      </Button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{"🍔".repeat(index) + effect}</div>
        ))}
      </div>
    </Box>
  );
};

export default ArrayDepMount;
