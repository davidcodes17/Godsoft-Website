import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex bg={"telegram.800"} color={'#fff'} justifyContent={"center"} p={10} borderTopRadius={20}>
      <Box>
        <Flex justifyContent={'center'}>
          <Image src="logo.jpg" width={"40%"} borderRadius={1000} />
        </Flex>
        <Text textAlign={'center'} fontSize={{lg : 30, md : 25, sm : 20, base : 15}} pt={3}>GODOSFT SYSTEMS LIMITED</Text>
        <Text textAlign={'center'} pb={3} fontSize={12}>...do it now, do it well...</Text>
        <Text textAlign={'center'} pt={{lg :100, md : 80, sm : 50, base : 10}}>&copy; All Rights Reserved @godsoftsystems</Text>
        <Text textAlign={'center'}>Developed By @DC</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
