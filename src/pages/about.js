import { Heading, Text, VStack } from '@chakra-ui/react'
import SmoothScroll from '../../public/components/SmoothScroll'

function About() {
	return (
		<>
			<VStack flex={1}>
				<VStack color={'gray.500'} py={{ base: 4, lg: 4 }}>
					<Heading fontSize={{ base: 'lg', sm: '2xl', lg: '4xl' }}>
						THE WORRY MONSTER
					</Heading>
					<Text fontSize={{ md: 'xl', lg: '2xl' }}>By Hannah Beattie</Text>
				</VStack>
				<SmoothScroll />
			</VStack>
		</>
	)
}

export default About
