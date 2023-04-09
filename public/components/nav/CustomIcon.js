import { IconButton, Image, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import StyledNextLink from './StyledNextLink'

export default function CustomIcon({ icon, href, page, idx }) {
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
			<IconButton idx={idx} icon={<Image alt={icon} src={icon} />} />
			<Text>{page}</Text>
		</StyledNextLink>
	)
}
