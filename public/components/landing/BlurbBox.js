import { Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

function BlurbBox({ title, children }) {
	return (
		<Container>
			<Heading>{title}</Heading>

			<VStack p={8} alignItems={'stretch'} fontSize={{ base: 'lg', lg: '5xl' }} spacing={8}>
				{children}
			</VStack>
		</Container>
	)
}

export default BlurbBox
