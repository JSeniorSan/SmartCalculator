import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";

function CountButton(props) {
  const checkExspressionType = () => {
    const listExpression = /\+|\-|\/|\*| /;
    const lastNumber = props.data[props.data.length - 1];
    if (listExpression.test(lastNumber)) return;
    props.onClick(props.data + props.expression);
  };

  return (
    <Button
      w="40px"
      height="40px"
      margin="4px"
      bg="skyblue"
      onClick={() => {
        checkExspressionType();
      }}
    >
      {props.expression}
    </Button>
  );
}

export default CountButton;
