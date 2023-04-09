import { Box, Divider, HStack, IconButton, Image, Spacer, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CustomIcon from './CustomIcon'
import Logo from './Logo'

const items = [
	{ page: 'About', icon: 'info', href: '/about' },
	{ page: 'Report a but', icon: 'bug', href: '/bugZone' },
]

export default function Header() {
	const router = useRouter()
	const currentRoute = router.pathname

	return (
		<HStack
			maxW={'97vw'}
			justify={'end'}
			fontSize={'3xl'}
			flex={1}
			alignItems={'stretch'}
			spacing={10}
			py={8}
		>
			{items.map(({ href, page, icon }, idx) => (
				<>
					<VStack>
						<CustomIcon icon={icon} href={href} key={idx} page={page} />
						{href === currentRoute ? <Divider opacity={'100'} borderWidth={2} /> : null}
					</VStack>
				</>
			))}
		</HStack>
	)
}
