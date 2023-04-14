import { Container, Heading, Image, Text, VStack } from '@chakra-ui/react'
import StyledNextLink from '../../public/components/nav/StyledNextLink'

function BugZone() {
	return (
		<VStack
			alignItems={'center'}
			justify={'center'}
			flex={1}
			fontSize={'2xl'}
			px={14}
			spacing={10}
		>
			<VStack alignItems={'center'} justify={'center'}>
				<Text>Something broken?</Text>
				<Text>A little glitchy?</Text>
				<Text>Got questions?</Text>

				<StyledNextLink href='mailto:hannahdbeattie@gmail.com?Subject=Growl-Grrr'>
					<VStack opacity={'60%'} _hover={{ opacity: '100%' }} py={8}>
						<Image h={10} alt={'bug icon'} src={'/assets/navcons/bug.png'} />
						<Text fontWeight={600}>GET IN TOUCH</Text>
					</VStack>
				</StyledNextLink>

				<Container pt={4}>
					<Text>
						NOTE: I am an independent artist, I will do my best to get back to you
						quickly, your patience is appreciated!
					</Text>
				</Container>
			</VStack>
		</VStack>
	)
}

export default BugZone
