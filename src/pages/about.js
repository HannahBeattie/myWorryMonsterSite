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
	Text,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import Feature from '../../public/components/landing/Feature'
import MonsterImage from '../../public/components/landing/MonsterImage'
import { getItem } from '../../public/components/content/landingContent'
import BlurbBox from '../../public/components/landing/BlurbBox'
import SmoothScroll from '../../public/components/SmoothScroll'

function About() {
	return (
		<>
			<VStack pt={'10vh'} position={'fixed'} left={0} right={0}>
				<Heading>HOW I MET THE WORRY MONSTER</Heading>
				<Text>By Hannah Beattie</Text>
			</VStack>
			<SmoothScroll />
		</>
	)
}

export default About
