import { Image, VStack } from '@chakra-ui/react'
import React from 'react'

function MonsterImage({ mood, alt }) {
	const checkMood = () => {
		if (mood === 'curious') {
			return '/blue/curious.png'
		} else if (mood === 'happy') {
			return '/blue/happy.png'
		} else {
			return '/blue/happy.png'
		}
	}

	return (
		<VStack>
			<Image
				flex={1}
				maxH={{ base: '60vh', md: '70vh', lg: '90vh', xl: '95vh' }}
				mt={{ base: 0, sm: 0, md: -10, lg: 200, xl: 300 }}
				mr={{ lg: 12 }}
				src={checkMood()}
				alt={
					alt
						? alt
						: 'An image of the worry Monster; A light-blue, friendly looking critter with a purple-and-pink polka-dot body'
				}
			/>
		</VStack>
	)
}

export default MonsterImage
