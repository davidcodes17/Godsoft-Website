import { Box, Center, Flex, Heading, IconButton, Link, Text } from "@chakra-ui/react";
import { Facebook, Instagram, Messenger, Whatsapp } from "iconsax-react";
import React from "react";
import Socials from "../components/Socials";

const Hero = () => {
  return (
    <Center py={{lg: 10, md : 5, sm : 5, base : 4}} px={5}>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Box textAlign={"center"}>
          <Text fontSize={{lg : 12,md : 12, sm : 10, base : 8}}>
            BUILDING LONG LASTING, PLATFORM INDEPENDENT & RELIABLE SOFTWARES
          </Text>
          <Heading fontSize={{lg : 60, md : 50,sm : 40, base : 20}} textTransform={"uppercase"} fontWeight={800}>
            Let the coding masters <br /> computerize your business <br /> and
            train you now!
          </Heading>

        <Socials />
        </Box>
      </Flex>
    </Center>
  );
};

export default Hero;
