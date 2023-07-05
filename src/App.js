import { Box, Text, Button } from "@chakra-ui/react";
import { React, useState } from "react";

function App() {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Text marginBottom="200px" textAlign="center" fontSize="5xl" bg="green">
          Header
        </Text>
      </header>
      <main>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            width="152px"
            border="1px solid black"
            borderRadius="7px"
          >
            <Text w="fit-content">{counts}</Text>
            <Text w="fit-content">{result}</Text>
          </Box>
          <Box
            bg="tomato"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ButtonsFolder data={counts} onClick={setCounts} />
          </Box>
        </Box>
      </main>
    </div>
  );
}

export default App;

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
