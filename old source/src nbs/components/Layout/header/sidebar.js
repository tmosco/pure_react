import React from "react";
import FontAwesome from "react-fontawesome";
import {  NavLink, Link } from "react-router-dom";
import "./header.css";
import {
  Flex,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent
} from "@chakra-ui/core";
import { useDisclosure } from "@chakra-ui/core";

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const list = ["Home", "News", "Video", "Sign in", "sign out"];

  function navBars() {
    return (
      <Box pointer="cursor" ml="3px" onClick={onOpen}>
        <FontAwesome name="bars" />
      </Box>
    );
  }

  function logo() {
    return (
      <Box ml="7px">
        <Link to="/">
          <img alt="nba logo" src="/images/nba_logo.png" height="20px" />
        </Link>
      </Box>
    );
  }

  return (
    <>
      <Flex>
        {navBars()}
        {logo()}
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        variantColor="teal"
        backgroundColor="teal"
        color="teal"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody bg="#000000">
            {list.map(x => {
              return (
                <Box
                  p="5px"
                  bg="#000000"
                  color="#bababa"
                  fontSize="20px"
                  borderTopWidth="1px"
                  borderColor="#808080"
                >
                  <NavLink to={`/${x}`}> {x} </NavLink>
                </Box>
              );
            })}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideBar;
