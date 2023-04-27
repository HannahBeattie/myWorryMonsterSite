import { Heading } from '@chakra-ui/react'
import React from 'react'

function Title() {
	return (
		<Heading
			fontSize={{ base: '4xl', sm: '6xl', md: '8xl' }}
			lineHeight={0.8}
			px={{ base: 6, lg: 0 }}
			pr={{ lg: 4, xl: 0 }}
			textAlign={{ base: 'center', lg: 'start' }}
		>
			My pet Worry Monster
		</Heading>
	)
}

export default Title
