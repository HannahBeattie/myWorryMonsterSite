import {
	Center,
	Container,
	Divider,
	HStack,
	Heading,
	Image,
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
		<VStack flex={1}>
			<HStack
				backgroundImage={'/assets/bg/5.png'}
				minH={'100vh'}
				minW={'100vw'}
				bgRepeat={'no-repeat'}
			>
				<BlurbBox>
					<Center>
						<Container>
							<Heading>ABOUT</Heading>
							{sec2}
						</Container>
					</Center>
				</BlurbBox>

				<Image
					borderRadius={50}
					maxH={900}
					src={'/blue/10.jpg'}
					alt={'the worry monster'}
				></Image>
			</HStack>
		</VStack>
	)
}

export default About
