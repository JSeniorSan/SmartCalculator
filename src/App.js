import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";
import "./App.css";
// -------------------------
// List of main components
import Calculator from "./Components/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text
          marginBottom="200px"
          textAlign="center"
          fontSize="5xl"
          bg="gainsboro"
        >
          Tekai's Smart Calculator
        </Text>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
