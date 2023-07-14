import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";

function Header() {
  return (
    <header className="App-header">
      <Text
        textAlign="center"
        fontSize="5xl"
        bg="gainsboro"
        borderBottom="1px solid white"
      >
        Tekai's Smart Calculator
      </Text>
    </header>
  );
}
export default Header;
