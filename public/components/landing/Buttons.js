import { Box, Button, HStack, IconButton, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'
import DelayFadeIn from '../animation/DelayFadeIn'

const btnScale = { md: 14 }

const btnProps = {
	backgroundColor: 'whiteAlpha.50',
	boxShadow: 'dark-lg',
	fontSize: { base: '2xl', lg: '2xl' },
	_hover: { bg: 'blackAlpha.900', color: 'gray.400' },
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
		<DelayFadeIn delay={3}>
			<VStack alignItems={'stretch'} spacing={{ base: 2, md: 4, lg: 6 }}>
				<Text fontSize={'xl'} textAlign={{ base: 'center', md: 'start' }}>
					Available on
				</Text>
				<HStack
					alignItems={'stretch'}
					justify={{ base: 'center', md: 'start' }}
					spacing={4}
				>
					<VStack>
						<IconButton {...btnProps} icon={<FaApple fontSize={35} />} />
						<Text {...btnFnt}>IOS</Text>
					</VStack>
					<VStack>
						<IconButton {...btnProps} icon={<FaAndroid fontSize={35} />} />
						<Text {...btnFnt}>Android</Text>
					</VStack>
				</HStack>
				<VStack spacing={0} alignItems={'stretch'}>
					<Text {...fontSize}>Created & coded by Hannah Beattie</Text>
					<Text {...fontSize}>Artwork by Hannah Beattie</Text>
					<Text {...fontSize}>Animation & tweaks by Mikey Lemmon</Text>
				</VStack>
			</VStack>
		</DelayFadeIn>
	)
}

export default Buttons
