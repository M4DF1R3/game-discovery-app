import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} height="60px" />
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
