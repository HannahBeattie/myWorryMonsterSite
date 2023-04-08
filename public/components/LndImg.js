import {
	Box,
	Button,
	Grid,
	GridItem,
	Heading,
	HStack,
	SimpleGrid,
	Spacer,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import Buttons from './landing/Buttons'
import MonsterImage from './MonsterImage'
import Subtitle from './Subtitle'

function LndImg() {
	return (
		<>
			<Grid
				Grid
				templateColumns={{ lg: 'repeat(5, 1fr)' }}
				pr={{ lg: '12vw' }}
				pl={{ lg: '8vw' }}
				pt={{ lg: 10 }}
			>
				<GridItem
					colSpan={{ base: 1, lg: 3 }}
					px={{ base: 6 }}
					pt={{ base: 2 }}
					p={{ md: 8, lg: 10 }}
				>
					<VStack flex={1} alignItems={{ base: 'center', md: 'stretch' }}>
						<Heading
							pt={{ sm: 4, lg: 0 }}
							maxW={{ base: 300, sm: 500, lg: '800' }}
							fontSize={{ base: '6xl', sm: '5xl', lg: '8xl', xl: '9xl' }}
							lineHeight={1}
						>
							My Worry Monster
						</Heading>
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

				<GridItem colSpan={{ lg: 2 }}>
					<MonsterImage mood={'curious'} />
				</GridItem>
			</Grid>
			<VStack display={{ base: 'flex', md: 'none' }}>
				<Buttons />
			</VStack>
		</>
	)
}

export default LndImg
