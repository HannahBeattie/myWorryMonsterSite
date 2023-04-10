import {
	Box,
	Button,
	Grid,
	GridItem,
	Heading,
	HStack,
	Image,
	SimpleGrid,
	Spacer,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import Buttons from './Buttons'
import Title from './Title'
import MonsterImage from './MonsterImage'
import Subtitle from './Subtitle'
import { AnimatePresence, motion } from 'framer-motion'
import DelayFadeIn from '../animation/DelayFadeIn'
import JumpIn from '../animation/JumpIn'
import Track from '../animation/Track'

function LndImg() {
	return (
		<>
			<Grid
				templateColumns={{ md: 'repeat(5, 1fr)' }}
				pr={{ md: '12vw', lg: '12vw' }}
				pl={{ md: '4vh', lg: '8vw' }}
				pt={{ lg: 10 }}
				minH={{ base: '100vh', sm: '70vh', lg: '100vh' }}
			>
				<GridItem
					colSpan={{ base: 1, md: 3 }}
					px={{ base: '10vw' }}
					pt={{ base: 2 }}
					p={{ md: 8, lg: 10 }}
				>
					<VStack flex={1} alignItems={{ base: 'stretch', md: 'stretch' }}>
						<Title />
						<VStack alignItems={'stretch'}>
							<Subtitle />

							<VStack
								alignItems={'stretch'}
								display={{ base: 'none', md: 'flex' }}
								py={{ lg: 6 }}
							>
								<Buttons />
							</VStack>
						</VStack>
					</VStack>
				</GridItem>

				<GridItem colSpan={{ base: 1, md: 2 }}>
					<JumpIn>
						<VStack flex={1} justify={'center'} align={'center'}>
							<Image
								maxH={{ base: 380, md: 'unset' }}
								minH={{ sm: 600, lg: 700 }}
								minW={{ sm: 400, lg: 500 }}
								alt={'monster'}
								src={'/blue/8.png'}
							/>
						</VStack>
					</JumpIn>
				</GridItem>
				<VStack display={{ base: 'flex', md: 'none' }}>
					<Buttons />
				</VStack>
			</Grid>
		</>
	)
}

export default LndImg
