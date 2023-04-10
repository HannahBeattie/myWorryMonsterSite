import { Spacer, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import CustomIcon from './CustomIcon'
import HorizontalHide from './HorizontalHide'
import DelayFadeIn from '../animation/DelayFadeIn'

export const items = [
	{ page: 'about', icon: 'info', href: '/about' },
	{ page: 'report bug', icon: 'bug', href: '/bugZone' },
]

export default function Header() {
	const router = useRouter()
	const currentRoute = router.pathname
	const add = '/assets/navcons/add.png'
	const minus = '/assets/navcons/minus.png'
	const [icon, setIcon] = useState(add)
	const [col, setCol] = useState(add)

	const handleIcon = () => {
		if (icon === add) {
			setIcon(minus)
		} else icon === minus
		setIcon(add)
	}

	return (
		<>
			<HorizontalHide />

			<DelayFadeIn delay={2}>
				<VStack
					display={{ base: 'none', lg: 'flex' }}
					fontSize={'sm'}
					alignItems={'stretch'}
					position={'fixed'}
					top={0}
					bottom={0}
					spacing={4}
					right={0}
					p={2}
				>
					<Spacer />
					{items.map(({ href, page, icon }, idx) => (
						<VStack key={`item-key${idx}`} borderRadius={200}>
							<CustomIcon icon={icon} href={href} page={page} />
						</VStack>
					))}
				</VStack>
			</DelayFadeIn>
		</>
	)
}
