import { Container, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { getItem } from '../../public/components/content/landingContent'
import BlurbBox from '../../public/components/landing/BlurbBox'
import StyledNextLink from '../../public/components/nav/StyledNextLink'

function BugZone() {
	const sec2 = getItem('two')
	return (
		<VStack alignItems={'center'} justify={'center'} flex={1}>
			<BlurbBox>
				<VStack>
					<Heading>THE BUG ZONE</Heading>
					<Container>
						<Text>Something broken?</Text>
						<Text>A little glitchy?</Text>
						<Text>Got questions?</Text>
						<VStack>
							<StyledNextLink href='mailto:hannahdbeattie@gmail.com?Subject=Growl-Grrr'>
								<VStack opacity={'60%'} _hover={{ opacity: '100%' }}>
									<Image
										h={10}
										alt={'bug icon'}
										src={'/assets/navcons/bug.png'}
									/>

									<Text fontWeight={600}>GET IN TOUCH</Text>
								</VStack>
							</StyledNextLink>
						</VStack>
					</Container>
					<Container>
						<Text>NOTE *I am an independent artist, your patience is appreciated*</Text>
					</Container>
				</VStack>
			</BlurbBox>
		</VStack>
	)
}

export default BugZone
