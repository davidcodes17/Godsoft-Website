import { Box, Flex, IconButton, Link, Text } from '@chakra-ui/react'
import { Facebook, Instagram, Messenger, Whatsapp } from 'iconsax-react'
import React from 'react'

const Socials = () => {
  return (
    <Box pt={5}>
    <Text fontSize={{lg : 20, md : 14, sm : 12, base : 12}}>CONTACT US</Text>
    <Flex justifyContent={"center"} gap={5} py={2}>
      <IconButton
        _hover={"none"}
        borderRadius={40}
        as={Link}
        href=""
        // scale={0.2}
        bg={"telegram.800"}
        color={"#fff"}
        icon={<Whatsapp variant="Bold" />}
        />
      <IconButton
        _hover={"none"}
        borderRadius={40}
        bg={"telegram.800"}
        as={Link}
        href=""
        color={"#fff"}
        icon={<Facebook variant="Bold" />}
        />
      <IconButton
        _hover={"none"}
        as={Link}
        href=""
        borderRadius={40}
        bg={"telegram.800"}
        color={"#fff"}
        icon={<Instagram variant="Bold" />}
      />
      <IconButton
        _hover={"none"}
        borderRadius={40}
        bg={"telegram.800"}
        color={"#fff"}
        as={Link}
        href=""
        icon={<Messenger variant="Bold" />}
      />
    </Flex>
    <Flex justifyContent={'center'} gap={5} py={2}>
      <Text fontSize={{lg : 20, md : 14, sm : 12, base : 12}} as={Link} href="tel:+2348054405294">+2348054405294</Text>
      <Text fontSize={{lg : 20, md : 14, sm : 12, base : 12}} as={Link} href="tel:+2348094601448">+2348094601448</Text>
    </Flex>
  </Box>
  )
}

export default Socials