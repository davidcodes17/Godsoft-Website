import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Course from '../components/Course'

const Courses = () => {
  return (
    <Box id='course'>
        <Heading textAlign={'center'} py={3} textTransform={'uppercase'} fontSize={{lg : 30, md : 25, sm : 25, base : 20}}>Avaliable Courses</Heading>
        <Flex justifyContent={'space-around'} flexWrap={'wrap'}>
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
        </Flex>
    </Box>
  )
}

export default Courses