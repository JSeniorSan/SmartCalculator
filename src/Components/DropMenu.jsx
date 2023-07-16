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
function DropMenu() {
  // !!! Фишка по добавлению меню
  // Уникальное состояние для chakra: свойство и метод
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="grey"
      display="inline-block"
      position="absolute"
      onMouseLeave={onClose}
    >
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
        offsetY="-10px"
        // отключение отображения HTML кода, когда меню скрыто, чтобы случайно не нажималось
        style={isOpen ? { display: true } : { display: "none" }}
      >
        <Box
          display="inline"
          bg="blue.100"
          border="1px solid white"
          position="absolute"
          zIndex="20"
          // w="40%"
        >
          <List display="flex" flexDirection="column" gap="3px" m="5px" p="8px">
            <ListItem fontSize="18px">Calculator</ListItem>
            <ListItem fontSize="18px">Converter</ListItem>
            <ListItem fontSize="18px">Settings</ListItem>
          </List>
        </Box>
      </SlideFade>
    </Box>
  );
}

export default DropMenu;
