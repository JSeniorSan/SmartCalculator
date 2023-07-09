import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";
import "../App.css";

// First component of field with buttons
function ButtonsFolder(props) {
  const field = ["7", "8", "9", "6", "5", "4", "1", "2", "3", "0", ","].map(
    (value, i) => {
      if (value === ",") {
        const point = ".";
        return (
          <Button
            key={11}
            w="110px"
            height="50px"
            margin="5px"
            fontSize="24px"
            textAlign="center"
            onClick={(e) => {
              props.onClick(props.data + point);
            }}
          >
            {value}
          </Button>
        );
      }
      return (
        <Button
          key={i}
          w="50px"
          height="50px"
          margin="5px"
          onClick={(e) => {
            if (props.data !== "0") {
              props.onClick(props.data + e.target.innerHTML);
            } else {
              props.onClick(e.target.innerHTML);
              props.onResult("");
            }
          }}
        >
          {value}
        </Button>
      );
    }
  );
  return (
    <Box display="flex" justifyContent="row" w="180px" flexWrap="wrap">
      {field}
    </Box>
  );
}

export default ButtonsFolder;
