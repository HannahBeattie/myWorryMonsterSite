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
import AboutContent from '../../public/components/AboutContent'

function About() {
	return (
		<>
			<VStack pt={'10vh'}>
				<Heading fontSize={{ base: 'xl', md: '4xl' }}>HOW I MET THE WORRY MONSTER</Heading>
				<Text fontSize={{ md: 'xl' }}>By Hannah Beattie</Text>
			</VStack>
			<SmoothScroll />
		</>
	)
}

export default About
