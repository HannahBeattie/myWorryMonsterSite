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
		<VStack spacing={0}>
			<Image
				position={'absolute'}
				left={0}
				right={0}
				zIndex={-1}
				minW={'full'}
				minH={'100vh'}
				src={'/assets/bg/4.png'}
				alt={alt ? alt : 'A hand-drawn background'}
			/>
			<Image
				position={'absolute'}
				left={0}
				right={0}
				top={'100vh'}
				zIndex={-1}
				minW={'full'}
				minH={'100vh'}
				src={'/assets/bg/4.png'}
				alt={alt ? alt : 'A hand-drawn background'}
			/>
			<Image
				position={'absolute'}
				left={0}
				right={0}
				top={'200vh'}
				zIndex={-1}
				minW={'full'}
				minH={'100vh'}
				src={'/assets/bg/4.png'}
				alt={alt ? alt : 'A hand-drawn background'}
			/>
			<Image
				position={'absolute'}
				left={0}
				right={0}
				top={'300vh'}
				zIndex={-1}
				minW={'full'}
				minH={'300vh'}
				src={'/assets/bg/4.png'}
				alt={alt ? alt : 'A hand-drawn background'}
			/>
			<Image
				position={'absolute'}
				left={0}
				right={0}
				top={'400vh'}
				zIndex={-1}
				minW={'full'}
				minH={'100vh'}
				src={'/assets/bg/4.png'}
				alt={alt ? alt : 'A hand-drawn background'}
			/>
			<Image
				position={'absolute'}
				left={0}
				right={0}
				top={'500vh'}
				zIndex={-1}
				minW={'full'}
				minH={'100vh'}
				src={'/assets/bg/5.png'}
				alt={alt ? alt : 'A hand-drawn background'}
			/>
		</VStack>
	)
}

export default BgImage
