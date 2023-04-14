import { GridItem, Grid, VStack, Box } from '@chakra-ui/react'
import React from 'react'
import Appear from '../animation/Appear'

export default function Feature({ image, children, right, bg }) {
	return (
		<>
			<Appear>
				<Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}>
					{!right && <GridItem colSpan={{ lg: 2 }}>{image}</GridItem>}
					{right && (
						<GridItem display={{ base: 'flex', lg: 'none' }} colSpan={{ lg: 2 }}>
							{image}
						</GridItem>
					)}
					<GridItem
						colSpan={{ base: 1, lg: 3 }}
						justifyContent={'center'}
						alignContent={'center'}
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
			</Appear>
		</>
	)
}
