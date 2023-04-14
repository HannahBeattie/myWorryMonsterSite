import { GridItem, Grid, VStack, Box, Center, Spacer, Container } from '@chakra-ui/react'
import React from 'react'
import Appear from '../animation/Appear'

export default function Feature({ image, children, right, bg }) {
	return (
		<>
			<Appear>
				<Grid templateColumns={{ lg: 'repeat(4, 1fr)' }} flex={1} px={{ base: 8 }}>
					{!right && (
						<>
							<GridItem colSpan={2}>
								<VStack>{image}</VStack>
							</GridItem>
							<GridItem colSpan={2}>
								<VStack alignItems={'stretch'} flex={1}>
									{children}
								</VStack>
							</GridItem>
						</>
					)}

					{right && (
						<>
							<GridItem colSpan={2} display={{ lg: 'none', base: 'flex' }}>
								<VStack>{image}</VStack>
							</GridItem>
							<GridItem colSpan={2}>
								<VStack alignItems={'stretch'} flex={1}>
									{children}
								</VStack>
							</GridItem>
							<GridItem colSpan={2} display={{ lg: 'flex', base: 'none' }}>
								<VStack>{image}</VStack>
							</GridItem>
						</>
					)}
				</Grid>
			</Appear>
		</>
	)
}
