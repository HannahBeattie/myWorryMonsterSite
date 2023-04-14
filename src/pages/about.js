import { Heading, Text, VStack } from '@chakra-ui/react'
import SmoothScroll from '../../public/components/SmoothScroll'

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
