import { Box, Flex, Heading, IconButton } from '@chakra-ui/react'
import React from 'react'
import Client from '../components/Client'

const Clients = () => {
  return (
    <Box py={10} id='client'>
        <Heading py={5} textAlign={'center'}>CLIENTS</Heading>
        <Flex justifyContent={'center'} p={20} flexWrap={'wrap'} gap={10} bg={'telegram.800'} color={'#000'}>
            <Client text="Ministry of Defence – Manpower Audit 2000 with Ubada Abah & Co. Chattered Accountants and Olatunji Ojo & Co " />
            <Client text="Interproject Nigeria Limited, Kaduna" />
            <Client text="Dalema Supermarket & Bakery, Kaduna" />
            <Client text="The Mascot Hospital, Kaduna" />
            <Client text="Jinya Hospital, Kaduna" />
            <Client text="The Prime Hospital" />
            <Client text="Kungo - Rock Limited, Lagos" />
            <Client text="Ministry of Information- PICB Section, Lagos" />
            <Client text="The Living Faith Foundation - Nationwide" />
            <Client text="The Prime Hospital, Kaduna" />
            <Client text="Vine Technologies, Lagos" />
            <Client text="Kavex Computers, Ikeja. Lagos." />
            <Client text="Walcom Computers, Lagos." />
            <Client text="Turbopedy Nigeria Limited" />
            <Client text="Septagus Consulting" />
            <Client text="Healthpoint Diagnostics " />
            <Client text="Pillars House Foundation" />
            <Client text="Strong Tower Hospital" />
            <Client text="Sarat Place" />
            <Client text="The Redeemed Christian Church of God " />
        </Flex>
    </Box>
  )
}

export default Clients