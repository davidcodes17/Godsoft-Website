import { Box, IconButton, Link } from '@chakra-ui/react'
import React from 'react'
import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import { ArrowCircleUp } from 'iconsax-react'
import LeaderShip from '../layouts/LeaderShip'
import Courses from '../layouts/Courses'
import Softwares from '../layouts/Softwares'
import Team from '../layouts/Team'
import Clients from '../layouts/Clients'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <Box>
        <IconButton as={Link} href='#' icon={<ArrowCircleUp />} borderRadius={40} px={2} py={3} bg={'telegram.800'} _hover={'none'} color={'white'} position={'fixed'} right={40} bottom={20} />
        <Header />
        <Hero />
        <LeaderShip />
        <Courses />
        <Softwares />
        <Team />
        <Clients />
        <Footer />
    </Box>
  )
}

export default Home