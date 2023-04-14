import { Heading, Text, VStack } from '@chakra-ui/react'
import SmoothScroll from '../../public/components/SmoothScroll'

function About() {
	return (
		<>
			<VStack pt={{ base: 12, md: '10vh' }} spacing={0} color={'gray.500'}>
				<Heading fontSize={{ base: 'lg', md: '4xl' }}>THE WORRY MONSTER</Heading>
				<Text fontSize={{ md: 'xl' }}>By Hannah Beattie</Text>
			</VStack>
			<SmoothScroll />
		</>
	)
}

export default About
