import { VStack, Text, Stack, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const props = {
	fontSize: { base: '2xl', sm: '3xl', md: '4xl', lg: '3xl', xl: '4xl' },
	textAlign: { base: 'start', sm: 'center', md: 'start', lg: 'start' },
}
function Subtitle() {
	return (
		<VStack justify={{ lg: 'center', sm: 'start' }} alignItems={'stretch'} spacing={-2}>
			<Text {...props}>The perfect pet</Text>
			<Text {...props}>for those who fret</Text>
		</VStack>
	)
}

export default Subtitle
