import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";
import "./App.css";

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
        <MainCalc />
      </main>
    </div>
  );
}

export default App;
