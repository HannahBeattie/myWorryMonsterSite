import { Box, Button, HStack, IconButton, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'

const btnProps = {
	backgroundColor: 'whiteAlpha.50',
	boxShadow: 'lg',
	fontSize: { base: '2xl', lg: '2xl' },
	color: 'gray.100',
	_hover: { color: 'purple.200' },
	p: 6,
}
const fontSize = {
	base: 'sm',
	md: 'lg',
	fontSize: 'lg',
}
function Buttons() {
	return (
		<VStack alignItems={'stretch'} spacing={{ base: 2, md: 4, lg: 8 }}>
			<Text fontSize={'xl'} textAlign={{ base: 'center', md: 'start' }}>
				Available on
			</Text>
			<HStack alignItems={'stretch'} justify={{ base: 'center', md: 'start' }}>
				<VStack>
					<IconButton {...btnProps} icon={<FaApple fontSize={35} />} />
					<Text {...fontSize}>ios</Text>
				</VStack>
				<VStack>
					<IconButton {...btnProps} icon={<FaAndroid fontSize={35} />} />
					<Text {...fontSize} s>
						Android
					</Text>
				</VStack>
			</HStack>

			<VStack spacing={0} alignItems={'stretch'}>
				<Text {...fontSize}>Created & coded by Hannah Beattie</Text>
				<Text {...fontSize}>Artwork by Hannah Beattie</Text>
				<Text {...fontSize}> With Animation by Mikey Lemmon</Text>
			</VStack>
		</VStack>
	)
}

export default Buttons
