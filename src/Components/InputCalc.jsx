import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";

import "../App.css";

// Функционал инпута (быстрый подсчет)
function InputCalc() {
  const [result, setResult] = useState("");
  const [counts, setCounts] = useState("");
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

  return (
    <Flex w="100%" justifyContent="center">
      <Input
        value={counts}
        type="text"
        onChange={(e) => {
          updateCounts(e);
        }}
      ></Input>
      <Text>{result}</Text>
    </Flex>
  );
}
export default InputCalc;
