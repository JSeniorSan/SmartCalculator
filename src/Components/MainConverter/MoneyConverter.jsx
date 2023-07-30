import { Box, Flex } from "@chakra-ui/react";

import { React, useState, useRef, useEffect } from "react";

import getData from "../parser.js";
import HeadStyleComponent from "./HeadStyleComponent.jsx";
import SelectInputComponent from "./SelectInputComponent.jsx";
import ResultComponent from "./ResultComponent.jsx";
function MoneyConverter(props) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const first = useRef();
  const second = useRef();
  const textResult = document.querySelector(".text-result");

  useEffect(() => {
    document.querySelector(".input-convert").focus();
  }, []);

  const convertingValues = ["Доллар США", "Рубли"];
  const readyConverterValue = convertingValues.map((value, i) => {
    return (
      <option value={value} key={i}>
        {value}
      </option>
    );
  });

  async function convertMoney() {
    if (first.current.value === "Доллар США") {
      getData(first.current.value).then((x) => {
        console.log(x);
        switch (second.current.value) {
          case "Доллар США":
            setResult(Number(input));
            break;
          case "Рубли":
            setResult(Math.round(Number(input) * Number(x) * 1000) / 1000);
            break;
        }
      });
    }
    if (first.current.value !== "Доллар США") {
      getData("Доллар США").then((x) => {
        console.log(x);
        switch (second.current.value) {
          case "Доллар США":
            setResult(Math.round((Number(input) / Number(x)) * 1000) / 1000);
            break;
          case "Рубли":
            setResult(Number(input));
            break;
        }
      });
    }

    textResult.style.color = "white";
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      height={"90vh"}
      width={"100%"}
      backgroundColor="skyblue"
    >
      <Flex
        flexDirection="column"
        minWidth={"40vh"}
        maxWidth={"50vh"}
        justifyContent="column"
        border="1px solid black"
        padding="10px"
        borderRadius="12px"
        backgroundColor="blackAlpha.700"
        height={"70vh"}
        position="relative"
      >
        <HeadStyleComponent />
        <Flex flexDirection={"column"} gap="80px">
          <SelectInputComponent
            readyConverterValue={readyConverterValue}
            first={first}
            setInput={setInput}
          />
          <ResultComponent
            convertMoney={convertMoney}
            readyConverterValue={readyConverterValue}
            second={second}
            result={result}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
export default MoneyConverter;
