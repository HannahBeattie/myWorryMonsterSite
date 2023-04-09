import {
	Center,
	Container,
	Divider,
	Grid,
	HStack,
	Heading,
	Image,
	SimpleGrid,
	Spacer,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import Feature from '../../public/components/landing/Feature'
import MonsterImage from '../../public/components/landing/MonsterImage'
import { getItem } from '../../public/components/content/landingContent'
import BlurbBox from '../../public/components/landing/BlurbBox'

function About() {
	const sec2 = getItem('two')
	return (
		<VStack flex={1} py={{ base: '10vh', md: '20vh' }}>
			<SimpleGrid columns={{ lg: 2, md: 1 }} rowGap={8}>
				<BlurbBox>
					<Center>
						<Container>
							<Heading>ABOUT</Heading>
							{sec2}
						</Container>
					</Center>
				</BlurbBox>
				<Center p={4}>
					<VStack borderRadius={50} p={4}>
						<Image
							p={1}
							shadow={'dark-lg'}
							borderRadius={50}
							maxH={{ md: 600, lg: 800 }}
							src={'/blue/10.jpg'}
							alt={'the worry monster'}
						/>
					</VStack>
				</Center>
			</SimpleGrid>
		</VStack>
	)
}

export default About
