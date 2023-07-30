import { React, useState } from "react";
import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import ClickCalculator from "./ClickCalculator";
import InputCalc from "./InputCalc";

// ---------------------------------------------------------------------

function MainCalc() {
  const [calcType, setCalcType] = useState("ClickCalc");
  const [arrHistory, setArrHistory] = useState([]);
  console.log(arrHistory);

  let calculator;
  switch (calcType) {
    case "ClickCalc":
      calculator = (
        <ClickCalculator
          onClick={updateHistory}
          arrHistory={arrHistory}
          reSetHistory={setArrHistory}
        />
      );

      break;
    case "InputCalc":
      calculator = (
        <InputCalc onKeyDown={updateHistory} arrHistory={arrHistory} />
      );
      break;
    default:
      calculator = (
        <ClickCalculator onClick={updateHistory} arrHistory={arrHistory} />
      );
  }

  function updateHistory(calcResult, condition) {
    const newArr = [...arrHistory];

    newArr.push(Math.round(Number(eval(calcResult)) * 1000) / 1000);
    setArrHistory(newArr);
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
        h="75vh"
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
          h="75vh"
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
          <Box m="5px">{calculator}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainCalc;
