import { AnimatePresence, motion } from 'framer-motion'
import { Heading, HStack, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import Track from './Track'

export default function MapLetters() {
	const letterProps = {
		fontSize: { base: '6xl', sm: '8xl', md: '7xl', lg: '8xl', xl: '9xl' },
		fontWeight: '900',
		textAlign: 'center',
		lineHeight: 0.8,
		textAlign: { base: 'center', md: 'start' },
	}

	return (
		<AnimatePresence>
			<VStack alignItems={'stretch'} mb={{ base: 0, sm: -14, md: -10, lg: 0 }}>
				<Heading {...letterProps} key='h-hello' pt={{ sm: '6vh', md: '4vh', lg: 0 }}>
					<HStack spacing={0} mb={{ base: 0, md: 0 }}>
						{[...'My Worry'].map((letter, idx) => (
							<Track key={`l-${idx}`} index={idx}>
								{letter}
							</Track>
						))}
					</HStack>
				</Heading>

				<Heading {...letterProps} key='w-world'>
					<HStack spacing={0} mt={{ base: -4, md: 0 }}>
						{[...'Monster'].map((letter, idx) => (
							<Track key={`l2-${idx}`} index={idx + 8}>
								{letter}
							</Track>
						))}
					</HStack>
				</Heading>
			</VStack>
		</AnimatePresence>
	)
}
