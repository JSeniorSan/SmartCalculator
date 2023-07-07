import { Box, Text, Button } from "@chakra-ui/react";
import { React, useState } from "react";

function App() {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");

  // Подсчет значения для результата

  const applyExpression = (countedNumber) => {
    setCounts(countedNumber);
    setResult(eval(counts));
  };

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
            width="210px"
            border="1px solid black"
            borderRadius="4px"
            height="40px"
            alignItems="center"
            paddingLeft="5px"
          >
            <Text w="fit-content">{counts}</Text>
            <Text color="green" w="fit-content">
              {result}
            </Text>
          </Box>
          <Box display="flex" gap="10px">
            <Box
              bg="tomato"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ButtonsFolder data={counts} onClick={setCounts} />
            </Box>
            <Box bg="blue" display="flex" flexDirection="column">
              <CountButton
                data={counts}
                onClick={applyExpression}
                expression={"+"}
              />
              <CountButton
                data={counts}
                onClick={applyExpression}
                expression={"-"}
              />
              <CountButton
                data={counts}
                onClick={applyExpression}
                expression={"×"}
              />
              <CountButton
                data={counts}
                onClick={applyExpression}
                expression={"÷"}
              />
              <CountButton
                data={counts}
                onClick={applyExpression}
                expression={"="}
              />
            </Box>
          </Box>
        </Box>
      </main>
    </div>
  );
}

export default App;

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

function CountButton(props) {
  return (
    <Button
      w="10px"
      onClick={() => {
        props.onClick(props.data + props.expression);
      }}
    >
      {props.expression}
    </Button>
  );
}
