import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="absolute left-[50%] translate-x-[-50%] top-[12%]">
      <div className="flex">
        <Button
          leftIcon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          colorScheme="blue"
          variant="solid"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? "Light" : "Dark"} Mode
        </Button>
      </div>
    </div>
  );
};

export default ThemeToggler;
