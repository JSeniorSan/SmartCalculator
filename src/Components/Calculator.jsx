import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";
import "../App.css";

// -------------------------------------------------
import InputCalc from "./InputCalc";
import ButtonsFolder from "./ButtonsFolder";
import CountButton from "./CountButton";
// -------------------------------------------------
function Calculator() {
  // ------------------------------------------------------
  // Изменение состояния
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");
  // ------------------------------------------------------
  const applyExpression = (countedNumber) => {
    setCounts(countedNumber);
    setResult(eval(counts));
  };

  return (
    <Box className="mainbox" maxWidth="25%" marginLeft="35%" minWidth="350px">
      <Box
        padding="40px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <InputCalc />
        <Box
          display="flex"
          justifyContent="space-between"
          width="270px"
          border="2px solid black"
          borderRadius="4px"
          height="40px"
          alignItems="center"
          paddingLeft="5px"
        >
          <Text w="fit-content" className="count">
            {counts}
          </Text>
          <Text color="green" w="fit-content" margin="5px">
            {result}
          </Text>
        </Box>
        <Box display="flex" gap="10px">
          <Box display="flex">
            <ButtonsFolder data={counts} onClick={setCounts} />
          </Box>
          <Box display="flex" flexDirection="column">
            <CountButton
              data={counts}
              onClick={applyExpression}
              expression={"+"}
            />
            <CountButton
              data={counts}
              onClick={applyExpression}
              expression={"-"}
            />
            <CountButton
              data={counts}
              onClick={applyExpression}
              expression={"*"}
            />
            <CountButton
              data={counts}
              onClick={applyExpression}
              expression={"/"}
            />
          </Box>
          <Flex flexDirection="column">
            <Button
              onClick={() => {
                const listExpression = /\+|\-|\/|\*| /;
                const lastNumber = counts[counts.length - 1];
                if (listExpression.test(lastNumber)) return;
                setResult(eval(counts));
              }}
              w="40px"
              height="40px"
              margin="4px"
              bg="tomato"
            >
              =
            </Button>
            <Button
              w="40px"
              height="40px"
              margin="4px"
              bg="tomato"
              onClick={() => {
                setCounts("0");
                setResult("");
              }}
            >
              C
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
export default Calculator;
