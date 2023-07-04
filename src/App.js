import { Box, Text, Button } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Header</p>
      </header>
      <Box
        bg="tomato"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ButtonsFolder />
      </Box>
    </div>
  );
}

export default App;

function ButtonsFolder() {
  const field = Array(10)
    .fill(null)
    .map((_, i) => {
      return (
        <Button key={i} w="40px" height="40px" margin="4px">
          {i}
        </Button>
      );
    });
  return (
    <Box display="flex" justifyContent="row" w="200px" flexWrap="wrap">
      {field}
    </Box>
  );
}
