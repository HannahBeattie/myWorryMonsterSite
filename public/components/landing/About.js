import {
	Center,
	Grid,
	GridItem,
	Heading,
	Image,
	SimpleGrid,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import BlurbBox from './BlurbBox'

function About({ content, img, isRight }) {
	return (
		<VStack flex={1} h={{ md: '80vh' }} w={'100vw'}>
			{isRight && (
				<Grid
					alignItems='center'
					justifyContent='center'
					flex={1}
					templateColumns={{ lg: 'repeat(3, 1fr)' }}
				>
					<GridItem colSpan={2}>
						<VStack
							px={{ base: 8, sm: 14, lg: '10vw' }}
							alignItems={'stretch'}
							flex={1}
							mr={{ lg: -50 }}
						>
							{content}
						</VStack>
					</GridItem>
					<GridItem
						colSpan={{ base: 2, lg: 1 }}
						align={'center'}
						justifyContent={'center'}
					>
						<VStack flex={1} pr={{ lg: 100 }}>
							{img}
						</VStack>
					</GridItem>
				</Grid>
			)}
			{!isRight && (
				<Grid
					alignItems='center'
					justifyContent='center'
					flex={1}
					templateColumns={{ lg: 'repeat(3, 1fr)' }}
				>
					<GridItem colSpan={1}>{img}</GridItem>
					<GridItem colSpan={1}>
						<VStack flex={1}>{img}</VStack>
					</GridItem>
				</Grid>
			)}
		</VStack>
	)
}

export default About
