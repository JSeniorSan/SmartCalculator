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

import { SlideFade, useDisclosure } from "@chakra-ui/react";

import { React, useState } from "react";
import "./App.css";
import { HamburgerIcon } from "@chakra-ui/icons";
// -------------------------
// List of main components
import Header from "./Components/Header";
import MainCalc from "./Components/MainCalc";
// ----------------------------------------------
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
        <MainCalc />
      </main>
    </div>
  );
}

export default App;

function Menu() {
  // !!! Фишка по добавлению меню
  // Уникальное состояние для chakra: свойство и метод
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="grey" display="inline-block" position="absolute">
      <HamburgerIcon
        bg="blue.200"
        onClick={onToggle}
        w="60px"
        h="45px"
        p="5px"
        m="5px"
        borderRadius="5px"
      />
      <SlideFade
        in={isOpen}
        offsetY="-10px"
        // отключение отображения HTML кода, когда меню скрыто, чтобы случайно не нажималось
        style={isOpen ? { display: true } : { display: "none" }}
      >
        <Box
          display="inline"
          bg="blue.100"
          border="1px solid white"
          position="absolute"
          zIndex="20"
          // w="40%"
        >
          <List display="flex" flexDirection="column" gap="3px" m="5px" p="8px">
            <ListItem fontSize="18px">Calculator</ListItem>
            <ListItem fontSize="18px">Converter</ListItem>
            <ListItem fontSize="18px">Settings</ListItem>
          </List>
        </Box>
      </SlideFade>
    </Box>
  );
}
