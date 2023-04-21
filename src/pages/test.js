import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Gallery from '../../public/components/Gallery'

function test() {
	return (
		<VStack flex={1} py={{ base: 6, lg: 12 }}>
			<Heading>App stills</Heading>
			<Gallery />
		</VStack>
	)
}

export default test
