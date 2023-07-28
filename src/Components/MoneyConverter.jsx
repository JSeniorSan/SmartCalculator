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
import { SettingsIcon, InfoIcon, ArrowDownIcon } from "@chakra-ui/icons";

function MoneyConverter(props) {
  const convertingResult = "10";
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      height={"90vh"}
      width={"100%"}
      backgroundColor="tomato"
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
        <Flex justifyContent="space-between" height="30%">
          <SettingsIcon
            width={"60px"}
            height={"60px"}
            className="settingIcon"
            color="blackAlpha.800"
          />
          <Box>
            <Text fontSize="40px" color="green.300">
              USD/RUB
            </Text>
          </Box>
        </Flex>
        <Flex flexDirection={"column"} gap="80px">
          <Flex gap="10px">
            <Input type="number" width={"65%"}></Input>
            <Flex>
              <Select>
                <option>USD</option>
                <option>Рубль</option>
              </Select>
              <InfoIcon marginLeft="5px" />
            </Flex>
          </Flex>
          <Flex flexDirection={"column"}>
            <Flex width={"100%"} justifyContent="space-between">
              <Flex>
                <Text fontSize="40px" color="black" textAlign={"center"}>
                  Result:
                </Text>
                <ArrowDownIcon
                  width={"40px"}
                  height={"70px"}
                  color="green.300"
                />
              </Flex>
              <Flex>
                <Select>
                  <option>USD</option>
                  <option>Рубль</option>
                </Select>
                <InfoIcon marginLeft="5px" />
              </Flex>
            </Flex>
            <Text
              fontSize="60px"
              width="100%"
              padding="30px"
              color="white"
              marginLeft="70px"
            >
              {convertingResult}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
export default MoneyConverter;
