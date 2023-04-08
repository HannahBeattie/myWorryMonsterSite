import { Image, VStack } from '@chakra-ui/react'
import React from 'react'

function BgImage({ bg, alt }) {
	const checkBg = () => {
		if (bg === 1) {
			return '/assets/bg/bg.png'
		} else if (bg === 2) {
			return '/assets/bg/2.png'
		} else if (bg === 3) {
			return '/assets/bg/3.png'
		} else if (bg === 4) {
			return '/assets/bg/4.png'
		} else return ''
	}

	return (
		<Image
			flex={1}
			minH={'100vh'}
			minW={'100vw'}
			position={'fixed'}
			zIndex={-1}
			src={checkBg()}
			alt={alt ? alt : 'A hand-drawn background'}
		/>
	)
}

export default BgImage
