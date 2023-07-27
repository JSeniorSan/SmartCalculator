import "../App.css";
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
    <Box
      bg="white"
      onMouseLeave={onClose}
      zIndex={30}
      marginLeft="10px"
      className="nav-section"
    >
      <HamburgerIcon
        bg="blackAlpha.800"
        onClick={onToggle}
        w="60px"
        h="45px"
        p="5px"
        m="5px"
        borderRadius="5px"
        color={"white"}
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
          bg="blackAlpha.800"
          border="1px solid white"
          position="absolute"
          zIndex="30"
          w="200px"
        >
          <List
            display="flex"
            flexDirection="column"
            gap="15px"
            m="5px"
            p="8px"
          >
            <button
              className="btn"
              onClick={(e) => props.menuItemCickHandler("Calculator")}
            >
              Calculator
            </button>

            <button
              className="btn"
              onClick={(e) => {
                props.menuItemCickHandler("Converters");
              }}
            >
              Converters
            </button>

            <button className="btn">Settings</button>
          </List>
        </Box>
      </SlideFade>
    </Box>
  );
}

export default DropMenu;
