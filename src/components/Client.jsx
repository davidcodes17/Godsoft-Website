import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Client = (props) => {
  return (
    <Box p={5} cursor={'pointer'} bg={'#fff'} borderRadius={10}>
        <Text fontSize={{lg : 15, md : 15, sm  : 15, base : 12}} textAlign={'center'}>
        {props.text}
        </Text>
    </Box>
  )
}

export default Client