import { React, useState, useRef, useEffect } from "react";
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

import ButtonsChoiseConverter from "./ButtonsChoiseConverter.jsx";
function ConverterMenu(props) {
  return (
    <ButtonsChoiseConverter menuItemCickHandler={props.menuItemCickHandler} />
  );
}

export default ConverterMenu;
