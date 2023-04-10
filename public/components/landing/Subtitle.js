import { VStack, Text, Stack, SimpleGrid, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DelayFadeIn from '../animation/DelayFadeIn'
import Track from '../animation/Track'

const props = {
	fontSize: { base: '2xl', sm: '3xl', md: '4xl', lg: '3xl', xl: '4xl' },
	textAlign: { base: 'center', sm: 'start', md: 'start', lg: 'start' },
	fontWeight: '900',
}
const delay = 20
function Subtitle() {
	return (
		<AnimatePresence>
			<VStack alignItems={'stretch'} spacing={{ base: -2, sm: -14, md: -10, lg: 0 }}>
				<Heading {...props} key='s-hello' pt={{ sm: '6vh', md: '4vh', lg: 0 }}>
					<HStack justify={{ base: 'center', md: 'start' }}>
						<HStack spacing={0} mb={{ base: 0, md: 0 }}>
							{[...'the'].map((letter, idx) => (
								<Track key={`l-${idx}`} index={idx + delay}>
									{letter}
								</Track>
							))}
						</HStack>
						<HStack spacing={0} mb={{ base: 0, md: 0 }}>
							{[...'perfect'].map((letter, idx) => (
								<Track key={`l-${idx}`} index={idx + delay}>
									{letter}
								</Track>
							))}
						</HStack>
						<HStack spacing={0} mb={{ base: 0, md: 0 }}>
							{[...'pet'].map((letter, idx) => (
								<Track key={`l-${idx}`} index={idx + delay}>
									{letter}
								</Track>
							))}
						</HStack>
					</HStack>
				</Heading>
				<Heading {...props} key='s-hello' pt={{ sm: '6vh', md: '4vh', lg: 0 }}>
					<HStack justify={{ base: 'center', md: 'start' }}>
						<HStack spacing={0} mb={{ base: 0, md: 0 }}>
							{[...'for'].map((letter, idx) => (
								<Track key={`l-${idx}`} index={idx + delay}>
									{letter}
								</Track>
							))}
						</HStack>
						<HStack spacing={0} mb={{ base: 0, md: 0 }}>
							{[...'those'].map((letter, idx) => (
								<Track key={`l-${idx}`} index={idx + delay}>
									{letter}
								</Track>
							))}
						</HStack>
						<HStack spacing={0} mb={{ base: 0, md: 0 }}>
							{[...'who'].map((letter, idx) => (
								<Track key={`l-${idx}`} index={idx + delay}>
									{letter}
								</Track>
							))}
						</HStack>
						<HStack spacing={0} mb={{ base: 0, md: 0 }}>
							{[...'fret'].map((letter, idx) => (
								<Track key={`l-${idx}`} index={idx + delay}>
									{letter}
								</Track>
							))}
						</HStack>
					</HStack>
				</Heading>
			</VStack>
		</AnimatePresence>
	)
}

export default Subtitle
