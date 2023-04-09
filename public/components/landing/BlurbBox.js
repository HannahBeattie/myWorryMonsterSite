import { Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

function BlurbBox({ heading, children }) {
	return (
		<Container>
			<Heading>{heading}</Heading>
			<VStack alignItems={'stretch'} fontSize={{ base: 'lg', lg: '2xl' }} spacing={8}>
				{children}
			</VStack>
		</Container>
	)
}

export default BlurbBox
