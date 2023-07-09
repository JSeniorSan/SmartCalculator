import { React, useState } from "react";
import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import ClickCalculator from "./ClickCalculator";
import InputCalc from "./InputCalc";
function MainCalc() {
  const [calcType, setCalcType] = useState("ClickCalc");

  let calculator;
  switch (calcType) {
    case "ClickCalc":
      calculator = <ClickCalculator />;

      break;
    case "InputCalc":
      calculator = <InputCalc />;
      break;
    default:
      calculator = <ClickCalculator />;
  }

  return (
    <Box
      h="100vh"
      bg="grey"
      w="100%"
      zIndex="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        className="mainbox"
        maxWidth="30%"
        minWidth="330px"
        h="70vh"
        zIndex="2"
      >
        <Box
          display="flex"
          padding="20px 5px"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          gap="10px"
          border="0.5px solid black"
          h="70vh"
        >
          <Button
            onClick={() =>
              calcType === "ClickCalc"
                ? setCalcType("InputCalc")
                : setCalcType("ClickCalc")
            }
          >
            {calcType === "ClickCalc"
              ? "Switch to InputCalc"
              : "Switch to ClickCalc"}
          </Button>
          {calculator}
        </Box>
      </Box>
    </Box>
  );
}
export default MainCalc;
