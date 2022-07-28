import React, { useState } from "react";
import { Box, Circle, Heading, Center, Text, Spacer } from "@chakra-ui/react";

const LiveClock = () => {
  let time = new Date().toLocaleTimeString();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <Circle
      h="150px"
      w="150px"
      background={"Black"}
      color="white"
      display={"flex"}
      flexDirection="column"
    >
      <Box>
        <Text>{day}</Text>
      </Box>

      <Box>
        <Text>{date + "-" + month + "-" + year}</Text>
      </Box>

      <Box>
        <Heading size="sm">{currentTime}</Heading>
      </Box>
    </Circle>
  );
};

export default LiveClock;
