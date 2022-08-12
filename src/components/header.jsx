import React from "react";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";
import ToggleColorMode from "./theme-toggle";
import Logo from "./logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]
      }
      />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        fontWeight="bold"
        ml="14rem"
      >
        <MenuItem component={Link} to="/events">Events</MenuItem>
        <MenuItem component={Link} to="/outreach">Outreach</MenuItem>
        <MenuItem component={Link} to="/projects">Projects</MenuItem>
        <MenuItem component={Link} to="/workshops">Workshops</MenuItem>
        <MenuItem component={Link} to="/team">Team</MenuItem>
        <MenuItem>
          <ToggleColorMode></ToggleColorMode>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      ml="8rem"
      mb={8}
      w={80}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;