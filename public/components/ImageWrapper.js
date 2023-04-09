import { Image, VStack } from '@chakra-ui/react'
import React from 'react'

function ImageWrapper({ alt, src, props }) {
	return (
		<VStack>
			<Image
				src={src}
				maxH={{ base: '58vh', sm: '65vh', md: '70vh', lg: '90vh', xl: '95vh' }}
				alt={alt}
				{...props}
			/>
		</VStack>
	)
}

export default ImageWrapper
