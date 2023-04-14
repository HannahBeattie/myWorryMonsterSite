import { Heading, Text, VStack } from '@chakra-ui/react'
import SmoothScroll from '../../public/components/SmoothScroll'

function About() {
	return (
		<>
			<VStack flex={1}>
				<VStack color={'gray.500'} py={4}>
					<Heading fontSize={{ base: 'lg', md: '4xl' }}>THE WORRY MONSTER</Heading>
					<Text fontSize={{ md: 'xl' }}>By Hannah Beattie</Text>
				</VStack>

				<SmoothScroll />
			</VStack>
		</>
	)
}

export default About
