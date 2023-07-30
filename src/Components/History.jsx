import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";

function History(props) {
  let results = props.arrHistory.map((historyEl, i) => {
    return (
      <Box display="flex" alignItems="center" key={i + 3} margin="0">
        <Button
          className="draggable"
          key={i}
          w="100px"
          bg="green.100"
          flexGrow={"0"}
          margin={"5px"}
          flexShrink={"0"}
          onClick={() => props.applyHistoryValue(historyEl)}
        >
          {historyEl}
        </Button>
      </Box>
    );
  });

  return (
    // Возврат бокса с историей
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      marginBottom="10px"
      height={"200px"}
      className="history-box"
    >
      {results}
    </Box>
  );
}
export default History;
