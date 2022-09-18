import React from 'react'
import { Box, CloseButton, Heading } from '@chakra-ui/react'

function eventCard({ title, datetime, location, blurb }) {
  return (
    <Box
      width='216px'
      height='141px'
      borderRadius='10px'
      background='linear-gradient(180deg, #56B1F8 0%, #6EDAF0 100%)'
      textColor='#FFFFFF'
      paddingTop='5px'
      paddingLeft='13px'
    >
      <CloseButton
        size='sm'
        fontSize='10px'
        border='1px solid #000000'
        borderRadius='15px'
        textColor='#000000'
        marginLeft='170px'
        onClick={() => {
          console.log('Event closed')
        }}
      />
      <Heading
        fontSize='15px'
        textShadow='-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
        marginTop='-10px'
        marginLeft='8px'
        marginBottom='5px'
      >
        {title}
      </Heading>
      <Box
        width='187px'
        height='87px'
        borderRadius='10px'
        background='#FFFFFF'
        textColor='#000000'
        paddingTop='8px'
        paddingLeft='16px'
        paddingRight='16px'
      >
        <Heading fontSize='15px'>Date: {datetime}</Heading>
        <Heading fontSize='15px'>Location: {location}</Heading>
        <Heading fontSize='15px'>Description: {blurb}</Heading>
      </Box>
    </Box>
  )
}

export default eventCard
