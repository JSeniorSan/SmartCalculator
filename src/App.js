import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";

import "./App.css";

function App() {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");

  // Изменение состояния

  const applyExpression = (countedNumber) => {
    setCounts(countedNumber);
    setResult(eval(counts));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Text
          marginBottom="200px"
          textAlign="center"
          fontSize="5xl"
          bg="gainsboro"
        >
          Header
        </Text>
      </header>
      <main>
        <Box
          className="mainbox"
          maxWidth="25%"
          marginLeft="35%"
          minWidth="350px"
        >
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
              <Text color="skyblue" w="fit-content" margin="5px">
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
                  expression={"×"}
                />
                <CountButton
                  data={counts}
                  onClick={applyExpression}
                  expression={"÷"}
                />
              </Box>
              <Box>
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
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
    </div>
  );
}

export default App;

// First component of field with buttons
function ButtonsFolder(props) {
  const field = Array(10)
    .fill(null)
    .map((_, i) => {
      return (
        <Button
          key={i}
          w="40px"
          height="40px"
          margin="4px"
          onClick={(e) => {
            if (props.data !== "0") {
              props.onClick(props.data + e.target.innerHTML);
            } else {
              props.onClick(e.target.innerHTML);
            }
          }}
        >
          {i}
        </Button>
      );
    });
  return (
    <Box display="flex" justifyContent="row" w="152px" flexWrap="wrap">
      {field}
    </Box>
  );
}

function CountButton(props) {
  const checkExspressionType = () => {
    const listExpression = /\+|\-|\/|\*| /;
    const lastNumber = props.data[props.data.length - 1];
    if (listExpression.test(lastNumber)) return;
    props.onClick(props.data + props.expression);
  };

  return (
    <Button
      w="40px"
      height="40px"
      margin="4px"
      bg="skyblue"
      onClick={() => {
        checkExspressionType();
      }}
    >
      {props.expression}
    </Button>
  );
}
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
