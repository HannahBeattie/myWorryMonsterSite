import { Container, VStack } from '@chakra-ui/react'
import React from 'react'

function BlurbBox() {
	return (
		<Container>
			<VStack alignItems={'stretch'} fontSize={'2xl'} spacing={8}>
				{children}
			</VStack>
		</Container>
	)
}

export default BlurbBox
