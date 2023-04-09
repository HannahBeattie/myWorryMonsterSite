import { IconButton, Image, VStack, Text, Icon, Center } from '@chakra-ui/react'
import React from 'react'
import StyledNextLink from './StyledNextLink'

export default function CustomIcon({ icon, href, page, idx, btscl }) {
	const scale = btscl ? btscl : 8

	const checkIcon = () => {
		if (icon === 'home') {
			return '/assets/navcons/home.png'
		} else if (icon === 'info') {
			return '/assets/navcons/info.png'
		} else if (icon === 'bug') {
			return '/assets/navcons/bug.png'
		} else {
			return
		}
	}
	console.log({ icon })

	return (
		<StyledNextLink href={href}>
			<VStack>
				<IconButton
					backgroundColor={'transparent'}
					borderRadius={200}
					_hover={{ backgroundColor: 'gray.900' }}
					idx={idx}
					icon={
						<Image
							backgroundColor={'transparent'}
							h={scale}
							w={scale}
							alt={icon}
							src={checkIcon()}
						/>
					}
				/>
				<Text fontSize={'2xl'}>{page}</Text>
			</VStack>
		</StyledNextLink>
	)
}
