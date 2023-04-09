import { HStack, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CustomIcon from './CustomIcon'

const items = [
	{ page: 'Home', icon: 'home', href: '/' },
	{ page: 'About', icon: 'info', href: '/about' },
	{ page: 'Report a but', icon: 'bug', href: '/bugZone' },
]

export default function Header() {
	return (
		<HStack fontSize={'3xl'} flex={1} alignItems={'stretch'} spacing={10} px={10} py={2}>
			<Spacer />
			{items.map(({ href, page, icon }, idx) => (
				<CustomIcon icon={icon} href={href} key={idx} page={page} />
			))}
		</HStack>
	)
}
