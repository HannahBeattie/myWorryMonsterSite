import { IconButton, Image, VStack, Text, Icon, Center } from '@chakra-ui/react'
import React from 'react'
import StyledNextLink from './StyledNextLink'
import { useRouter } from 'next/router'

export default function CustomIcon({ icon, href, page, btscl }) {
	const scale = btscl ? btscl : 6

	const checkIcon = () => {
		if (icon === 'home') {
			return '/assets/navcons/home.png'
		} else if (icon === 'info') {
			return '/assets/navcons/info.png'
		} else if (icon === 'bug') {
			return '/assets/navcons/bug.png'
		} else if (icon === 'minus') {
			return '/assets/navcons/minus.png'
		} else if (icon === 'plus') {
			return '/assets/navcons/plus.png'
		} else {
			return
		}
	}
	const router = useRouter()
	const currentRoute = router.pathname

	return (
		<StyledNextLink href={href}>
			<VStack
				_hover={{ backgroundColor: 'transparent', opacity: 100 }}
				opacity={href === currentRoute ? '100%' : '50%'}
			>
				<IconButton
					backgroundColor={'transparent'}
					_hover={{ backgroundColor: 'transparent' }}
					borderRadius={200}
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
				<Text fontSize={'xl'}>{page}</Text>
			</VStack>
		</StyledNextLink>
	)
}
