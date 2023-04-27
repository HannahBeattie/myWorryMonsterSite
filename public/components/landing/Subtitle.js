import { VStack, Text, Stack, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const props = {
	fontSize: { base: 'lg', sm: '2xl', md: '4xl', lg: '3xl', xl: '4xl' },
	textAlign: { base: 'center', sm: 'center', md: 'start', lg: 'start' },
}
function Subtitle() {
	return (
		<Stack
			flex={1}
			direction={{ base: 'column', sm: 'row', md: 'column' }}
			alignItems={{ base: 'stretch', sm: 'center', lg: 'stretch' }}
			justify={{ base: 'center', sm: 'center', lg: 'center' }}
			spacing={-2}
			pt={{ base: 2 }}
		>
			<Text {...props}>The perfect pet</Text>
			<Text {...props}>for those who fret</Text>
		</Stack>
	)
}

export default Subtitle
