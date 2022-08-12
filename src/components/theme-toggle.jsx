import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={() => toggleColorMode()}
      top="0"
      right="2rem"
      bottom="2rem"
      left="2rem"
      size="md"
      ml="10rem"
    >
      {colorMode === "dark" ? (
        <SunIcon w="0.9rem" />
      ) : (
        <MoonIcon color="blue.700" w="0.9rem" />
      )}
    </Button>
  );
};

export default ToggleColorMode;