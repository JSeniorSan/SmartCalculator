import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import History from "./History";
import "../App.css";

// Функционал инпута (быстрый подсчет)
function InputCalc(props) {
  const [result, setResult] = useState("");
  const [counts, setCounts] = useState("");
  useEffect(() => {
    document.querySelector("input").focus();
  });
  const updateCounts = (e) => {
    const expressions = /\+|\-|\/|\*|=|\$|[A-z]| /;
    const lastNumber = e.target.value[e.target.value.length - 2];
    // функционал блока, чтобы не могли работать математические знаки сначала
    if (
      // Второй с конца входит в плохой список
      expressions.test(lastNumber) &&
      // и последний нажатый элемент входит
      expressions.test(e.nativeEvent.data) &&
      // и последний нажатый элемент не стирание
      e.nativeEvent.data !== null
    )
      return;

    // Проверка, чтобы при нажатии на знаки не выводился результат со знаками
    if (!expressions.test(e.nativeEvent.data)) setResult(eval(e.target.value));
    // Заносим в переменную
    setCounts(e.target.value);
  };

  // Установка значения из истории в слот инпута
  function applyHistoryValue(historyValue) {
    if (counts !== "0") {
      setCounts(counts + historyValue);
    } else {
      setCounts(historyValue);
    }
  }

  return (
    <Flex w="100%" justifyContent="center" flexDirection="column">
      <History
        arrHistory={props.arrHistory}
        applyHistoryValue={applyHistoryValue}
      />
      <Flex>
        <Input
          fontSize="24px"
          color="grey.300"
          value={counts}
          type="text"
          onChange={(e) => {
            updateCounts(e);
          }}
          onKeyDown={(e) => {
            if (e.nativeEvent.key === "Enter") {
              if (props.arrHistory.length > 3) {
                props.arrHistory.shift();
                props.onKeyDown(counts);
              } else {
                props.onKeyDown(counts);
              }

              setCounts("");
            }
          }}
        ></Input>
        <Text marginLeft="5px" fontSize="24px" color="grey.200">
          {result}
        </Text>
      </Flex>
    </Flex>
  );
}
export default InputCalc;
