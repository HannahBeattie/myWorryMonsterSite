import { Grid, GridItem, Heading, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import MonsterImage from './MonsterImage'

function LndImg() {
	return (
		<Grid
			Grid
			templateColumns={{ lg: 'repeat(5, 1fr)' }}
			pr={{ lg: 20 }}
			pl={{ lg: 10 }}
			pt={{ lg: 10 }}
		>
			<GridItem colSpan={{ base: 1, lg: 3 }} px={{ base: 6 }} pt={{ base: 2 }} p={{ lg: 10 }}>
				<VStack flex={1} alignItems={'stretch'}>
					<Heading
						maxW={{ base: 300, lg: '800' }}
						fontSize={{ base: '6xl', sm: '7xl', lg: '8xl', xl: '9xl' }}
						lineHeight={1}
					>
						My Worry Monster
					</Heading>
					<Text
						fontSize={{ base: '2xl', lg: '3xl', xl: '4xl' }}
						lineHeight={1}
						maxW={{ base: 300 }}
					>
						The perfect pet for those who fret
					</Text>
				</VStack>
			</GridItem>

			<GridItem colSpan={{ lg: 2 }}>
				<MonsterImage mood={'curious'} />
			</GridItem>
		</Grid>
	)
}

export default LndImg
