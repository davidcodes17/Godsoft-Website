import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { ArrowCircleLeft2, ArrowCircleRight2 } from "iconsax-react";
import React from "react";
import { render } from "react-dom";

const Softwares = () => {
  return (
    <Box id="soft" py={20}>
      <Heading
        textAlign={"center"}
        fontSize={{ lg: 40, md: 30, sm: 30, base: 20 }}
        textTransform={"uppercase"}
      >
        Softwares Developed By US
      </Heading>
      <Box
        bgPosition={"center"}
        color={"#fff"}
        bgImage={"/img4.jpg"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        my={5}
      >
        <Flex
          py={{lg : 20, md : 20, sm : 15, base : 5}}
          px={5}
          alignItems={"center"}
          gap={{ lg: 10, md: 10, sm: 6, base: 3 }}
          justifyContent={"center"}
          bg={"blackAlpha.800"}
        >
          <Box py={10}>
            <Text
              fontWeight={800}
              fontSize={{ lg: 25, base: 15 }}
              textTransform={"uppercase"}
            >
              Godsoft Point of Sales <br />
              Supermarkets And All Business That Sells
            </Text>
            <Text
              fontSize={{ lg: 12, base: 10 }}
              width={{ lg: 900, md: 600, sm: 400, base: 300 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              doloremque inventore, exercitationem vitae fuga quis adipisci
              soluta minima asperiores nobis. Ea doloribus quaerat natus magnam,
              porro veniam molestiae alias ut? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ut doloremque inventore,
              exercitationem vitae fuga quis adipisci soluta minima asperiores
              nobis. Ea doloribus quaerat natus magnam, porro veniam molestiae
              alias ut? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ut doloremque inventore, exercitationem vitae fuga quis
              adipisci soluta minima asperiores nobis. Ea doloribus quaerat
              natus magnam, porro veniam molestiae alias ut?
            </Text>
            <Flex justifyContent={'center'} gap={20} py={4}>
              <IconButton
                borderRadius={40}
                bg={"telegram.800"}
                color="#fff"
                _hover={"none"}
                icon={<ArrowCircleLeft2 />}
              />
              <IconButton
                borderRadius={40}
                bg={"telegram.800"}
                color="#fff"
                _hover={"none"}
                icon={<ArrowCircleRight2 />}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Softwares;
