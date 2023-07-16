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

import { React, useState } from "react";
import "./App.css";
import DropMenu from "./Components/DropMenu";

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
        <DropMenu />
        <MainCalc />
      </main>
    </div>
  );
}

export default App;
