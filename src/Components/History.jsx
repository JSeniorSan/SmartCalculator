import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { React, useState } from "react";

function History(props) {
  let results = props.arrHistory.map((historyEl, i) => {
    return (
      <Box display="flex" gap="10px" alignItems="center" key={i + 3}>
        <Text key={i + 2}>{"№" + (i + 1)}</Text>
        <Button key={i} w="100px" bg="green.100">
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
    >
      {results}
    </Box>
  );
}
export default History;