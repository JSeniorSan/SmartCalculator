import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";

function History(props) {
  let results = props.arrHistory.map((historyEl, i) => {
    return (
      <Box display="flex" gap="10px" alignItems="center" key={i + 3}>
        <Button
          className="draggable"
          key={i}
          w="100px"
          bg="green.100"
          onClick={() => props.applyHistoryValue(historyEl)}
        >
          {historyEl}
        </Button>
      </Box>
    );
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      gap="10px"
      marginBottom="10px"
      height={"200px"}
    >
      {results}
    </Box>
  );
}
export default History;
