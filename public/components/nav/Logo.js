import { IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import StyledNextLink from './StyledNextLink'
const scale = 16
const home = { page: 'Home', icon: 'home', href: '/' }
function Logo() {
	return (
		<StyledNextLink href={'/'}>
			<IconButton
				position={'fixed'}
				top={8}
				left={4}
				_hover={{ bg: 'transparent' }}
				bg={'transparent'}
				icon={
					<Image
						borderRadius={'20'}
						h={scale}
						w={scale}
						alt={'monster logo'}
						src={'/icons/favicon.png'}
						backgroundColor={'whiteAlpha.400'}
					/>
				}
			/>
		</StyledNextLink>
	)
}

export default Logo
