import { Center, Heading, Image, SimpleGrid, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import BlurbBox from './BlurbBox'

function About({ content, img, isRight }) {
	return (
		<VStack
			flex={1}
			alignItems='center'
			justifyContent='center'
			height={'100vh'}
			w={'100vw'}
			px={{ base: 0, md: 14 }}
			py={'20vh'}
		>
			{isRight && (
				<SimpleGrid flex={1} columns={{ lg: 2, md: 1 }}>
					<VStack justify={'start'} flex={1}>
						{content}
					</VStack>
					<VStack flex={1} justify={'center'}>
						{img}
					</VStack>
				</SimpleGrid>
			)}
			{!isRight && (
				<SimpleGrid columns={{ lg: 2, md: 1 }} px={{ base: 8 }} flex={1} minH={'90vh'}>
					<Center>{img}</Center>
					{content}
				</SimpleGrid>
			)}
		</VStack>
	)
}

export default About
