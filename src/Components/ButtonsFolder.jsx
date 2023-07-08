import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";
import "../App.css";

// First component of field with buttons
function ButtonsFolder(props) {
  const field = Array(10)
    .fill(null)
    .map((_, i) => {
      return (
        <Button
          key={i}
          w="40px"
          height="40px"
          margin="4px"
          onClick={(e) => {
            if (props.data !== "0") {
              props.onClick(props.data + e.target.innerHTML);
            } else {
              props.onClick(e.target.innerHTML);
            }
          }}
        >
          {i}
        </Button>
      );
    });
  return (
    <Box display="flex" justifyContent="row" w="152px" flexWrap="wrap">
      {field}
    </Box>
  );
}

export default ButtonsFolder;
