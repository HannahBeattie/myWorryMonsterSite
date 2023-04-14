import { Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

function BlurbBox({ title, children, props }) {
	return (
		<Container
			flex={1}
			justifySelf={{ base: 'center', lg: 'center' }}
			alignSelf={{ base: 'center', lg: 'center' }}
			alignContent={{ base: 'center', lg: 'center' }}
			maxW={'100vw'}
		>
			<VStack
				alignItems={'stretch'}
				px={8}
				flex={1}
				justifyContent={{ base: 'stretch', lg: 'stretch' }}
				alignSelf={{ base: 'center', lg: 'center' }}
				alignContent={{ base: 'center', lg: 'center' }}
				fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
				{...props}
			>
				{children}
			</VStack>
		</Container>
	)
}

export default BlurbBox
