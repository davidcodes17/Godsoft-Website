import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const TeamCard = (props) => {
  return (
    <Box p={10} cursor={"pointer"} width={300}>
      <Image src={props.img} width={"100%"} borderTopRadius={20} />
      <Text
        textAlign={"center"}
        borderBottomRadius={20}
        py={3}
        bg={"gray.100"}
        fontSize={12}
      >
        Enoch Olujide Areegbe <br /> MD/CEO
      </Text>
    </Box>
  );
};

export default TeamCard;
