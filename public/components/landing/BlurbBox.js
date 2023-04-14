import { Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

function BlurbBox({ title, children, props }) {
	return (
		<VStack
			flex={1}
			alignItems={'stretch'}
			fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
			{...props}
		>
			{children}
		</VStack>
	)
}

export default BlurbBox
