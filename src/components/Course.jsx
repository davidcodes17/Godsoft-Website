import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const Course = () => {
  return (
    <Box as={motion.div} whileHover={{boxShadow : '0px 0px 10px #ddd',scale : 1.1}} borderRadius={20} m={{lg : 10, md : 10, sm : 5, base : 2}} cursor={'pointer'}>
        <Box borderTopRadius={20} width={{lg :200,md : 180, sm : 150, base : 150}} bg={'telegram.800'} height={'200px'}></Box>
        <Text textAlign={'center'} borderBottomRadius={20} py={3} bg={'gray.100'} fontSize={12}>Godsoft Certified <br /> Java SE Developer</Text>
    </Box>
  )
}

export default Course