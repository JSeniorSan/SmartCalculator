import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";
import "../App.css";
import History from "./History";
import Dragging from "./Dragging";
// -------------------------------------------------
// Инпуты компонент

import ButtonsFolder from "./ButtonsFolder";
import CountButton from "./CountButton";
// -------------------------------------------------
function ClickCalculator(props) {
  // ------------------------------------------------------
  // Изменение состояния
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");
  // ------------------------------------------------------
  const applyExpression = (countedNumber) => {
    setCounts(countedNumber);
    setResult(eval(counts));
  };

  function applyHistoryValue(historyValue) {
    if (counts !== "0") {
      setCounts(counts + historyValue);
    } else {
      setCounts(historyValue);
    }
  }

  return (
    <Dragging
      setResult={setResult}
      result={result}
      setHistory={applyHistoryValue}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
        gap="10px"
      >
        <Text fontSize="18px">История операций</Text>
        <History
          arrHistory={props.arrHistory}
          applyHistoryValue={applyHistoryValue}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          border="1px solid white"
          borderRadius="5px"
          height="50px"
          alignItems="center"
          paddingLeft="5px"
        >
          <Text w="fit-content" className="count" fontSize="24px">
            {counts}
          </Text>
          <Text color="green" w="fit-content" margin="5px" fontSize="24px">
            {result}
          </Text>
        </Box>
        <Box display="flex" gap="10px">
          <Box display="flex">
            <ButtonsFolder
              data={counts}
              onClick={setCounts}
              onResult={setResult}
            />
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
                if (props.arrHistory.length > 3) {
                  props.arrHistory.shift();
                  props.onClick(counts);
                } else {
                  props.onClick(counts);
                }

                setCounts("0");
              }}
              w="50px"
              height="50px"
              margin="4px"
              bg="tomato"
            >
              =
            </Button>
            <Button
              w="50px"
              height="50px"
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
    </Dragging>
  );
}
export default ClickCalculator;
