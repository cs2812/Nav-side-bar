import {
  Box,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
} from "@chakra-ui/react";
import React from "react";
import webLogo from "../../Image/logo.svg";
const Drawer = ({ onClose, isOpen }) => {
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Flex>
            <Box h="45px" w="150px">
              <Image w="100%" h="100%" src={webLogo} />
            </Box>
          </Flex>
        </DrawerHeader>
        <DrawerBody></DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Drawer;
