import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import webLogo from "../../Image/logo.svg";
import { Link, Outlet } from "react-router-dom";
const Navbar = ({onOpen}) => {
  return (
    <>
      <Flex justifyContent={"space-between"} boxShadow="md" p="0.7rem 1rem">
        <Box h="43px" w="120px">
          <a>
            <Image w="100%" h="100%" src={webLogo}></Image>
          </a>
        </Box>
        <Flex
          gap="20px"
          w="40%"
          justifyContent={"space-evenly"}
          flexDirection={"row"}
          // border={"solid"}
          boxSizing="border-box"
          pt={"1rem"}
          fontWeight={"500"}
          color={"#234465"}
        >
          <Text _hover={{ color: "#3070f0" }}>
            <Link to="/">Home</Link>
          </Text>
          <Text _hover={{ color: "#3070f0" }}>
            <Link to="/about">About</Link>
          </Text>
          <Text _hover={{ color: "#3070f0" }}>
            <Link to="/course">Course</Link>
          </Text>
          <Text _hover={{ color: "#3070f0" }}>
            <Link to="/contact">Contact</Link>
          </Text>
        </Flex>
        <Flex gap="10px">
          <Button colorScheme="messenger">Login</Button>
          <Button colorScheme="messenger" variant="outline">
            Sign up
          </Button>
          <Button onClick={onOpen}>
            Open
          </Button>
        </Flex>
      </Flex>
      <Outlet/>
    </>
  );
};

export default Navbar;
