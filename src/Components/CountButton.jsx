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
      w="50px"
      height="50px"
      margin="4px"
      bg="skyblue"
      onClick={() => {
        checkExspressionType();
      }}
      className="droppable"
    >
      {props.expression}
    </Button>
  );
}

export default CountButton;
