import { Box, Divider, HStack, IconButton, Image, Spacer, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CustomIcon from './CustomIcon'
import Logo from './Logo'

const items = [
	{ page: 'about', icon: 'info', href: '/about' },
	{ page: 'report bug', icon: 'bug', href: '/bugZone' },
]

export default function Header() {
	const router = useRouter()
	const currentRoute = router.pathname

	return (
		<VStack
			fontSize={'sm'}
			alignItems={'stretch'}
			position={'fixed'}
			bottom={0}
			spacing={4}
			right={0}
			p={2}
			backgroundColor={'blackAlpha.100'}
		>
			{items.map(({ href, page, icon }, idx) => (
				<>
					<VStack>
						<CustomIcon icon={icon} href={href} key={idx} page={page} />
						{/* {href === currentRoute ? (
							<Box
								borderWidth={2}
								borderColor={'white'}
								borderStyle={'ridge'}
								h={0.4}
								w={'100%'}
							/>
						) : null} */}
					</VStack>
				</>
			))}
		</VStack>
	)
}
