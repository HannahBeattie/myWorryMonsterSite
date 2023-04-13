import { Image, VStack } from '@chakra-ui/react'
import React from 'react'

function MonsterImage({ im, alt, props, shadow }) {
	const checkMood = () => {
		if (im === 1) {
			return '/blue/1.jpg'
		} else if (im === 2) {
			return '/blue/3.jpg'
		} else if (im === 3) {
			return '/blue/3.jpg'
		} else if (im === 4) {
			return '/blue/4.jpg'
		} else if (im === 5) {
			return '/blue/5.jpg'
		} else if (im === 6) {
			return '/blue/6.jpg'
		} else if (im === 7) {
			return '/blue/7.png'
		} else if (im === 8) {
			return '/blue/8.png'
		} else if (im === 9) {
			return '/blue/9.png'
		} else if (im === 10) {
			return '/blue/10.jpg'
		} else if (im === 11) {
			return '/blue/bg.png'
		} else if (im === 12) {
			return '/blue/12.png'
		} else {
			return '/blue/1.jpg'
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
