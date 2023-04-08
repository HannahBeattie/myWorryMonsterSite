import { Image, VStack } from '@chakra-ui/react'
import React from 'react'

function MonsterImage({ mood, alt, props, shadow, glow }) {
	const checkMood = () => {
		if (mood === 'curious') {
			return '/blue/curious.png'
		} else if (mood === 'happy') {
			return '/blue/happy.png'
		} else if (mood === 'ph') {
			return '/blue/ph.png'
		} else if (mood === 'ph2') {
			return '/blue/ph2.jpg'
		} else {
			return '/blue/happy.png'
		}
	}

	return (
		<VStack>
			<Image
				shadow={shadow ? 'dark-lg' : 'none'}
				flex={1}
				maxH={{ base: '58vh', sm: '65vh', md: '70vh', lg: '90vh', xl: '95vh' }}
				mt={{ base: 0, sm: 0, md: -10, lg: 200, xl: 300 }}
				mb={{ base: -4, sm: 0 }}
				{...props}
				src={checkMood()}
				className={'shadow'}
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
