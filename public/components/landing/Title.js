import { HStack, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import MapLetters from '../animation/MapLetters'

function Title() {
	return (
		<>
			<HStack flex={'1'} direction={'row'} justify={{ base: 'center', md: 'start' }}>
				<MapLetters />
			</HStack>
		</>
	)
}

export default Title
