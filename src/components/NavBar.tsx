import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} height="60px" />
      <SearchInput onSearch={onSearch} />
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
