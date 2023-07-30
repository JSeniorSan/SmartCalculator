import { Flex, Text, Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { InfoIcon, ArrowDownIcon } from "@chakra-ui/icons";
import "./CSS.css";
function ResultComponent(props) {
  return (
    <Flex flexDirection={"column"}>
      <Flex justifyContent="space-between">
        <button className="btn-result" onClick={() => props.convertMoney()}>
          Convert
        </button>

        <Flex>
          <Select ref={props.second}>{props.readyConverterValue}</Select>
          <InfoIcon marginLeft="5px" />
        </Flex>
      </Flex>
      <Flex>
        <Text
          fontSize="40px"
          color="black"
          textAlign={"center"}
          className="text-result"
        >
          Result:
        </Text>
        <ArrowDownIcon width={"40px"} height={"70px"} color="green.300" />
      </Flex>

      <Text
        fontSize="60px"
        width="100%"
        padding="20px"
        color="white"
        textAlign={"center"}
        alignContent={"center"}
      >
        {props.result}
      </Text>
    </Flex>
  );
}
export default ResultComponent;
