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

function ButtonsChoiseConverter(props) {
  return (
    <Flex flexDirection="row" gap="20px">
      <Button onClick={(e) => props.menuItemCickHandler(e.target.innerHTML)}>
        MoneyConverter
      </Button>
      <Button onClick={(e) => props.menuItemCickHandler(e.target.innerHTML)}>
        MetricConverter
      </Button>
    </Flex>
  );
}
export default ButtonsChoiseConverter;
