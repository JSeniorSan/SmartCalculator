import "./CSS.css";
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
import { HamburgerIcon } from "@chakra-ui/icons";
import { SlideFade, useDisclosure } from "@chakra-ui/react";

function DropMenu(props) {
  // !!! Фишка по добавлению меню
  // Уникальное состояние для chakra: свойство и метод
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" onMouseLeave={onClose} zIndex={30} marginLeft="10px">
      <HamburgerIcon
        bg="blue.200"
        onMouseEnter={onOpen}
        w="60px"
        h="45px"
        p="5px"
        m="5px"
        borderRadius="5px"
      />
      <SlideFade
        // Обязательная часть, чтобы выпадало меню при действии с иконкой
        in={isOpen}
        offsetY="-20px"
        // отключение отображения HTML кода, когда меню скрыто, чтобы случайно не нажималось
        style={isOpen ? { display: true } : { display: "none" }}
      >
        <Box
          display="inline"
          bg="blue.100"
          border="1px solid white"
          position="absolute"
          zIndex="20"
          minW="20%"
          maxW={"50%"}
        >
          <List display="flex" flexDirection="column" gap="3px" m="5px" p="8px">
            <ListItem fontSize="18px">
              <Button
                className="btn btn--menu"
                onClick={(e) => props.menuItemCickHandler("Calculator")}
                w={"80%"}
              >
                Calculator
              </Button>
            </ListItem>
            <ListItem fontSize="18px">
              <Button
                w={"80%"}
                className="btn btn--menu"
                onClick={(e) => props.menuItemCickHandler("DropMenu")}
              >
                Converter
              </Button>
            </ListItem>
            <ListItem fontSize="18px">
              <Button className="btn btn--menu" w={"80%"}>
                Settings
              </Button>
            </ListItem>
          </List>
        </Box>
      </SlideFade>
    </Box>
  );
}

export default DropMenu;
