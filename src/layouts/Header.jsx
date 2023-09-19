import { Box, Button, Flex, IconButton, Image, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import NavList from "../components/NavList";
import { ArrowCircleRight2, CloseCircle, HambergerMenu } from "iconsax-react";

const Header = () => {
  const [trans, setTrans] = useState({
    translate: "-180px",
  });
  return (
    <Box py={4}>
      <Flex alignItems={"center"} justifyContent={"space-around"}>
        <Image
          src="logo.jpg"
          borderRadius={100}
          width={{ lg: "8%", md: "10%", sm: "15%", base: "15%" }}
        />
        <Box display={{ lg: "block", md: "none", sm: "none", base: "none" }}>
          <NavList />
        </Box>
        <Box display={{ lg: "block", md: "none", sm: "none", base: "none" }}>
          <Button
            rightIcon={<ArrowCircleRight2 size={18} color="#fff" />}
            fontSize={12}
            height={5}
            py={4}
            px={5}
            bg={"telegram.800"}
            _hover={"none"}
            color={"#fff"}
          >
            Get Statred
          </Button>
        </Box>
        <Box
          cursor={"pointer"}
          display={{ lg: "none", md: "block", sm: "block", base: "block" }}
          onClick={() => {
            setTrans({ ...trans, translate: "0px" });
          }}
        >
          <HambergerMenu />
        </Box>

        <Box
          fontSize={12}
          transform={`translate(${trans.translate})`}
          position={"fixed"}
          lineHeight={'70px'}
          left={0}
          top={0}
          p={7}
          bg={"telegram.800"}
          zIndex={999999999}
          borderRightRadius={20}
        >
          <IconButton
            icon={<CloseCircle variant="Bold" />}
            onClick={() => {
              setTrans({ ...trans, translate: "-180px" });
            }}
            bg={"none"}
            _hover={"none"}
            position={"absolute"}
            right={8}
          />
          <Link pt={5} display={"block"}>
            Home
          </Link>
          <Link display={'block'} href="#team">Our Team</Link>
          <Link display={'block'} href="#soft">Softwares</Link>
          <Link display={'block'} href="#course">Courses</Link>
          <Link display={'block'} href="#client">Clients</Link>
          <Link display={'block'} href="#leader">Business & Leadership</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
