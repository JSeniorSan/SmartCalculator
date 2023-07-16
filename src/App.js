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
import Converter from "./Components/Converter";

// -------------------------
// List of main components
import Header from "./Components/Header";
import MainCalc from "./Components/MainCalc";
// ----------------------------------------------

function App() {
  const [mode, setMode] = useState("Calculator");
  let selectedMode;

  function menuItemCickHandler(chapter) {
    setMode(chapter);
  }

  switch (mode) {
    case "Calculator":
      selectedMode = <MainCalc />;
      break;
    case "DropMenu":
      selectedMode = <Converter />;
      break;
    default:
      selectedMode = <MainCalc />;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <DropMenu menuItemCickHandler={menuItemCickHandler} />
        {selectedMode}
      </main>
    </div>
  );
}

export default App;
