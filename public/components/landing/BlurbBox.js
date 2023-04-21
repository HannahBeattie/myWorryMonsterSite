import { Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

function BlurbBox({ title, children, props }) {
	return (
		<VStack
			py={4}
			flex={1}
			alignItems={'stretch'}
			fontSize={{ base: 'lg', sm: '2xl', md: '3xl', lg: '4xl' }}
			space={4}
			{...props}
		>
			{children}
		</VStack>
	)
}

export default BlurbBox
