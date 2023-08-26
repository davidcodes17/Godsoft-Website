import { Flex, Link } from '@chakra-ui/react'
import React from 'react'

const NavList = () => {
  return (
    <Flex gap={10} fontSize={12}>
        <Link>Home</Link>
        <Link href='#team'>Our Team</Link>
        <Link href='#soft'>Softwares</Link>
        <Link href='#course'>Courses</Link>
        <Link href='#client'>Clients</Link>
        <Link href='#leader'>Business & Leadership</Link>
    </Flex>
  )
}

export default NavList