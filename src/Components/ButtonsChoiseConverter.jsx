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

import { React, useState, useRef, useEffect } from "react";
import "./converterMenu.css";

function ButtonsChoiseConverter(props) {
  return (
    <Flex flexDirection="row" gap="20px" className="btns btn-menu">
      <button
        onClick={(e) => props.menuItemCickHandler(e.target.innerHTML)}
        className="menu-item-btn"
      >
        MoneyConverter
      </button>
      <button
        onClick={(e) => props.menuItemCickHandler(e.target.innerHTML)}
        className="menu-item-btn"
      >
        MetricConverter
      </button>
    </Flex>
  );
}
export default ButtonsChoiseConverter;
