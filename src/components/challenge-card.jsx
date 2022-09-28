import React from 'react'
import { Box, Button, CloseButton, Heading, Input } from '@chakra-ui/react'

function challengeCard({ index, question }) {
  return (
    <Box
      width='264px'
      height='368px'
      border='1px solid #000000'
      borderRadius='10px'
      background='linear-gradient(180deg, #56B1F8 0%, #6EDAF0 100%)'
      textColor='#FFFFFF'
      paddingTop='10px'
      paddingLeft='15px'
    >
      <CloseButton
        size='sm'
        border='1px solid #000000'
        borderRadius='15px'
        marginLeft='210px'
        onClick={() => {
          console.log('Challenge closed')
        }}
      />
      <Heading
        fontSize='15px'
        textShadow='-1px 0 black, 0 2px black, 2px 0 black, 0 -1px black'
        marginTop='-10px'
        marginBottom='9px'
        marginLeft='10px'
      >
        challenge {index}
      </Heading>
      <Box
        width='229px'
        height='299px'
        border='1px solid #131111'
        borderRadius='10px'
        background='#FFFFFF'
        textColor='#000000'
        paddingTop='31px'
        paddingRight='28px'
        paddingLeft='27px'
      >
        <Heading fontSize='20px' marginBottom='20px'>
          question: {question}
        </Heading>
        <Input
          type='text'
          placeholder='type your answer here'
          size='sm'
          width='175px'
          marginBottom='8px'
        />
        <Button
          colorScheme='gray'
          size='xs'
          border='1px solid #100F0F'
          marginLeft='110px'
          onClick={() => {
            console.log('Challenge submitted')
          }}
        >
          submit
        </Button>
      </Box>
    </Box>
  )
}

export default challengeCard
