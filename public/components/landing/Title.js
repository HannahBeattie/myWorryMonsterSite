import { Heading } from '@chakra-ui/react'
import React from 'react'

function Title() {
	return (
		<Heading
			pt={{ sm: '6vh', md: '4vh', lg: 0 }}
			fontSize={{ base: '6xl', sm: '6xl', lg: '8xl', xl: '9xl' }}
			lineHeight={0.8}
			textAlign={{ base: 'center', md: 'start' }}
		>
			My Worry Monster
		</Heading>
	)
}

export default Title
