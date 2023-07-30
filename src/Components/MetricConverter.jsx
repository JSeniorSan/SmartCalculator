import {
  Box,
  Text,
  Button,
  Input,
  Flex,
  ListItem,
  UnorderedList,
  List,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { React, useState, useRef, useEffect } from "react";

function MetricConverter() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  const first = useRef();
  const second = useRef();
  const convertingValues = ["Centimeters", "Meters", "None"];

  useEffect(() => document.querySelector(".input-start").focus());
  console.log(result);
  function convert() {
    if (first.current.value === "Meters") {
      switch (second.current.value) {
        case "Centimeters":
          setResult(input * 100);
          break;
        case "Meters":
          setResult(input);
          break;
      }
    }
    if (first.current.value === "Centimeters") {
      switch (second.current.value) {
        case "Centimeters":
          setResult(input);
          break;
        case "Meters":
          setResult(input / 100);
          break;
      }
    }
  }

  return (
    <Flex
      h={"90vh"}
      bg={"grey"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={"5px"}
    >
      <Text fontSize={"20px"} marginLeft="10px" color="blue.200">
        Enter the value:
      </Text>
      <Flex gap={"15px"} m={"10px"}>
        <input
          className="input-start"
          type="number"
          onChange={(e) => setInput(e.target.value)}
          color="red.200"
        />

        <Select w={"90%"} ref={first} color="white">
          <option value="Centimeters" className="option">
            Centimeters
          </option>
          <option value="Meters" className="option">
            Meters
          </option>
        </Select>
      </Flex>
      <Text fontSize={"20px"} marginLeft="10px" color="blue.200">
        Result:
      </Text>

      <Flex gap={"15px"} m={"0px 10px 10px 10px"}>
        <Text
          border="1px solid white"
          w={"105%"}
          borderRadius="6px"
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          paddingLeft={"15px"}
          color="blue.200"
        >
          {result}
        </Text>
        <Select w={"90%"} ref={second} color="white">
          <option value="Centimeters" className="option">
            Centimeters
          </option>
          <option value="Meters" className="option">
            Meters
          </option>
        </Select>
      </Flex>
      <Box w="100%" display={"flex"} justifyContent={"center"}>
        <Button w="70%" bg="tomato" onClick={() => convert()}>
          Convert
        </Button>
      </Box>
    </Flex>
  );
}
export default MetricConverter;
