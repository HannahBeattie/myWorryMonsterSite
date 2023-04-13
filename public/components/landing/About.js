import { Center, Image, SimpleGrid, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import BlurbBox from './BlurbBox'

function About({ content, img, isRight }) {
	return (
		<VStack flex={1} height={'100vh'} w={'100vw'} px={{ base: 4, md: 14 }}>
			{isRight && (
				<SimpleGrid columns={{ lg: 2, md: 1 }} justify={{ lg: 'center' }}>
					{content}

					<VStack flex={1}>{img}</VStack>
				</SimpleGrid>
			)}
			{!isRight && (
				<SimpleGrid
					columns={{ lg: 2, md: 1 }}
					px={{ md: 14, base: 8 }}
					flex={1}
					minH={'90vh'}
				>
					<Center>{img}</Center>
					{content}
				</SimpleGrid>
			)}
		</VStack>
	)
}

export default About
