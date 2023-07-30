import { Input, Flex } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { React } from "react";
import { InfoIcon } from "@chakra-ui/icons";
import "./CSS.css";
function SelectInputComponent(props) {
  return (
    <Flex gap="10px" marginTop="20px" justifyContent={"space-between"}>
      <Input
        type="number"
        maxWidth={"40%"}
        onChange={(e) => {
          props.setInput(e.target.value);
        }}
        className="input-convert"
      ></Input>
      <Flex>
        <Select maxWidth="150px" ref={props.first}>
          {props.readyConverterValue}
        </Select>
        <InfoIcon marginLeft="5px" />
      </Flex>
    </Flex>
  );
}
export default SelectInputComponent;
