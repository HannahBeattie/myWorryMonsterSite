import {
	Box,
	Button,
	HStack,
	Icon,
	IconButton,
	Link,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'

const btnScale = { md: 14 }

const btnProps = {
	backgroundColor: 'whiteAlpha.50',
	boxShadow: 'lg',
	fontSize: { base: '2xl', lg: '2xl' },
	_hover: { bg: 'whiteAlpha.50' },
	borderRadius: 200,
	w: btnScale,
	h: btnScale,
}
const fontSize = {
	// fontSize: { base: 'md', md: 'md', lg: 'xl' },
}
const btnFnt = {
	fontSize: { md: '3xl' },
}
function Buttons() {
	return (
		<VStack alignItems={'stretch'} spacing={{ base: 1, md: 4, lg: 6 }}>
			<Text fontSize={{ lg: '3xl' }} textAlign={{ base: 'center', md: 'start' }}>
				Available on
			</Text>

			<HStack alignItems={'stretch'} justify={{ base: 'center', md: 'start' }} spacing={4}>
				<VStack>
					<NextLink
						passHref
						legacyBehavior
						target='blank'
						href={'https://apps.apple.com/nz/app/my-pet-worry-monster/id6447295037'}
					>
						<Link>
							<Icon fontSize={{ lg: 35, base: 30 }} as={FaApple} />
						</Link>
					</NextLink>
					<Text {...btnFnt}>IOS</Text>
				</VStack>
			</HStack>
			<VStack spacing={0} alignItems={'stretch'}>
				<Text {...fontSize}>Created & coded by Hannah Beattie</Text>
				<Text {...fontSize}>Artwork by Hannah Beattie</Text>
				<Text {...fontSize}>Animation by Mikey Lemmon</Text>
			</VStack>
		</VStack>
	)
}

export default Buttons
