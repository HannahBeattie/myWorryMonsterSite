import { Heading } from '@chakra-ui/react'
import React from 'react'

function Title() {
	return (
		<Heading
			fontSize={{ base: '6xl', sm: '5xl', md: '7xl', lg: '8xl', xl: '9xl' }}
			lineHeight={0.8}
			textAlign={{ base: 'center', lg: 'start' }}
		>
			My pet Worry Monster
		</Heading>
	)
}

export default Title
