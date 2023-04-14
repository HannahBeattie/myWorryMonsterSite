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
			<VStack px={{ lg: '15vw' }} minH={'95vh'} justify={'center'}>
				<Grid templateColumns={{ lg: 'repeat(5, 1fr)' }}>
					<GridItem colSpan={{ base: 1, lg: 3 }}>
						<Title />
						<Subtitle />

						<VStack alignItems={'stretch'} display={{ base: 'none', lg: 'flex' }}>
							<Buttons />
						</VStack>
					</GridItem>

					<GridItem
						colSpan={{ lg: 2 }}
						ml={{ lg: -30, xl: -30 }}
						mt={{ base: 0, sm: -6, lg: 0 }}
					>
						<VStack flex={1} py={10}>
							<Image
								flex={1}
								maxH={{ base: 400, sm: 500, md: 600, lg: 800 }}
								alt={'The worry monster holdin two bags of worries'}
								src='/assets/mnstr/wwb.png'
							/>
						</VStack>
					</GridItem>
				</Grid>
				<VStack display={{ base: 'flex', lg: 'none' }}>
					<Buttons />
				</VStack>
			</VStack>
		</Appear>
	)
}

export default LndImg
