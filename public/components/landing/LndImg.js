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
import Appear from '../animation/Appear'

function LndImg() {
	return (
		<Appear>
			<Grid
				templateColumns={{ lg: 'repeat(5, 1fr)' }}
				pr={{ lg: '12vw' }}
				pl={{ lg: '8vw' }}
				pt={{ lg: '12vh' }}
			>
				<GridItem
					colSpan={{ base: 1, lg: 3 }}
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
								display={{ base: 'none', lg: 'flex' }}
								py={{ lg: 6 }}
							>
								<Buttons />
							</VStack>
						</VStack>
					</VStack>
				</GridItem>

				<GridItem colSpan={{ lg: 2 }} mt={{ lg: '10vh', xl: '6vh' }}>
					<VStack flex={1}>
						<Image
							maxH={{ base: 400, sm: 600, md: 500, lg: 1000 }}
							alt={'The worry monster holdin two bags of worries'}
							src='/assets/mnstr/wwb.png'
						/>
					</VStack>
				</GridItem>
			</Grid>
			<VStack display={{ base: 'flex', lg: 'none' }}>
				<Buttons />
			</VStack>
		</Appear>
	)
}

export default LndImg
