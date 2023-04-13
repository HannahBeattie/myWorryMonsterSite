import { Center, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import BlurbBox from './BlurbBox'

function About({ content, img, isRight }) {
	return (
		<>
			{isRight && (
				<SimpleGrid columns={{ lg: 2, md: 1 }} rowGap={8}>
					{content}
					<Center>{img}</Center>
				</SimpleGrid>
			)}
			{!isRight && (
				<SimpleGrid columns={{ lg: 2, md: 1 }} rowGap={8}>
					<Center>{img}</Center>
					{content}
				</SimpleGrid>
			)}
		</>
	)
}

export default About
