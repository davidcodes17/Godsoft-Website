import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <Box id="team" py={20}>
      <Heading textTransform={"uppercase"} textAlign={"center"}>
        Meet The TEam
      </Heading>
      <Flex justifyContent={"space-around"} flexWrap={'wrap'} py={5} alignItems={"center"}>
        <TeamCard img="/ceo.jpg" />
        <TeamCard img="/ceo.jpg" />
        <TeamCard img="/ceo.jpg" />
        <TeamCard img="/ceo.jpg" />
      </Flex>
    </Box>
  );
};

export default Team;
