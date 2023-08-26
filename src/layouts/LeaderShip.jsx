import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowCircleRight2 } from "iconsax-react";
import React from "react";
import Socials from "../components/Socials";

const LeaderShip = () => {
  return (
    <Box id="leader" py={{lg :"120px",md : "80px", sm : "50px", base : 10}}>
      <Flex
        justifyContent={"center"}
        gap={20}
        alignItems={"center"}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        px={10}
        bgImage={{lg : 'none',md :"none", sm : "img3.jpg" ,base : "img3.jpg"}}
        // px={{lg : 20}}
      >
        <Box
        // backdropFilter={'blur(20px)'}
          color={{lg : '#000',md : '#000' ,sm : '#fff',base : '#fff'}}
          py={{lg : 7, base : 10}}
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={{ lg: 40, md: 30, sm: 20, base: 20 }}
          >
            Business & Leadership Training
          </Heading>
          <Text
            width={{ lg: 600, md: 400, sm: 300, base: 300 }}
            fontSize={{ lg: 25, md  : 12, sm : 15, base : 15  }}
          >
            Leaders of Organizations can also benefit from our special seminar
            tagged Application of Advanced Programming Principles in solving
            difficult leadership problems. Register now for a super coding
            experience, coders rule the world!
          </Text>
          <Button
            rightIcon={<ArrowCircleRight2 size={18} color="#fff" />}
            fontSize={12}
            height={5}
            py={5}
            my={3}
            px={5}
            bg={"telegram.800"}
            _hover={"none"}
            color={"#fff"}
          >
            Get Statred
          </Button>
        </Box>
        <Image src="/img3.jpg" width={{lg : "35%", md : "30%"}} display={{lg : 'block',md : 'block', base : 'none' }} borderRadius={20} />
      </Flex>
    </Box>
  );
};

export default LeaderShip;
