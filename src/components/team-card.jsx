import { React, useState } from 'react'
import { Box, Center, Heading, Image, VStack } from '@chakra-ui/react'
import ReactCardFlip from 'react-card-flip'

function TeamCard({ name, imagePath, pronouns, major, year, favoriteDessert }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
      <Box
        width='102px'
        height='140px'
        borderRadius='10px'
        background='#FEFEFE'
        textColor='#000000'
        paddingTop='3px'
        paddingLeft='3px'
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Center
          width='96px'
          height='133px'
          border='2px solid #6FDBF1'
          borderRadius='10px'
        >
          <VStack>
            <Heading fontSize='15px'>{name}</Heading>
            <Image src={imagePath} alt={name} width='70px' height='87px' />
          </VStack>
        </Center>
      </Box>
      <Box
        width='102px'
        height='140px'
        borderRadius='10px'
        background='#FEFEFE'
        textColor='#000000'
        paddingTop='3px'
        paddingLeft='3px'
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Box
          width='96px'
          height='133px'
          border='2px solid #6FDBF1'
          borderRadius='10px'
          paddingTop='15px'
          paddingLeft='5px'
          paddingRight='5px'
        >
          <Heading fontSize='9px' marginTop='10px' marginBottom='10px'>
            pronouns: {pronouns}
          </Heading>
          <Heading fontSize='9px' marginTop='10px' marginBottom='10px'>
            major: {major}
          </Heading>
          <Heading fontSize='9px' marginTop='10px' marginBottom='10px'>
            year: {year}
          </Heading>
          <Heading fontSize='9px' marginTop='10px' marginBottom='10px'>
            favorite dessert: {favoriteDessert}
          </Heading>
        </Box>
      </Box>
    </ReactCardFlip>
  )
}

export default TeamCard
