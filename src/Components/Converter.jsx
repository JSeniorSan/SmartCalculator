import {
  Box,
  Text,
  Button,
  Input,
  Flex,
  ListItem,
  UnorderedList,
  List,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

function Converter() {
  return (
    <Flex
      h={"90vh"}
      bg={"grey"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={"10px"}
    >
      <Flex gap={"15px"} m={"10px"}>
        <Input type="number" />
        <Select w={"90%"}>
          <option value="Centimeters">Centimeters</option>
          <option value="Meters">Meters</option>
        </Select>
      </Flex>

      <Flex gap={"15px"} m={"10px"}>
        <Input type="number" />
        <Select w={"90%"}>
          <option value="Centimeters">Centimeters</option>
          <option value="Meters">Meters</option>
        </Select>
      </Flex>
      <Button>Convert</Button>
    </Flex>
  );
}
export default Converter;
