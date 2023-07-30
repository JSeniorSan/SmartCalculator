import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Text, Flex } from "@chakra-ui/react";
function HeadStyleComponent() {
  return (
    <Flex justifyContent="space-between" height="30%">
      <SettingsIcon
        width={"60px"}
        height={"60px"}
        className="settingIcon"
        color="blackAlpha.800"
      />
      <Box>
        <Text fontSize="40px" color="green.300">
          USD/Рубли
        </Text>
      </Box>
    </Flex>
  );
}
export default HeadStyleComponent;
