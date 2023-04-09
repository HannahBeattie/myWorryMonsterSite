import { GridItem, Grid, VStack, Box } from '@chakra-ui/react'
import React from 'react'

export default function Feature({ image, children, right, bg }) {
	return (
		<>
			<Grid Grid templateColumns={{ lg: 'repeat(5, 1fr)' }} pl={{ md: '4vh', lg: '8vw' }}>
				{!right && <GridItem colSpan={{ lg: 2 }}>{image}</GridItem>}
				{right && (
					<GridItem display={{ base: 'auto', lg: 'none' }} colSpan={{ lg: 2 }}>
						{image}
					</GridItem>
				)}
				<GridItem
					colSpan={{ base: 1, lg: 3 }}
					p={{ base: 4, md: 8, lg: 10 }}
					py={{ base: 8 }}
				>
					<VStack bg={bg ? bg : 'blackAlpha.400'} w={'100%'} h={'100%'} p={8}>
						{children}
					</VStack>
				</GridItem>
				{right && (
					<GridItem display={{ base: 'none', lg: 'flex' }} colSpan={{ lg: 2 }}>
						{image}
					</GridItem>
				)}
			</Grid>
		</>
	)
}
