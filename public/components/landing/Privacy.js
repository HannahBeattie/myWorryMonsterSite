import { VStack, Text, Card, Heading } from '@chakra-ui/react'
import React from 'react'

function Privacy() {
	return (
		<VStack flex={1} align={'center'} justify={'center'} px={'10vw'} py={'8vh'}>
			<Card
				shadow={'base'}
				bg={'gray.200'}
				px={10}
				py={10}
				fontFamily={'lora'}
				fontWeight={600}
				color={'black'}
				fontSize={'xl'}
			>
				<VStack spacing={4} alignItems={'stretch'}>
					<Heading textTransform={'uppercase'}>
						MY PET WORRY MONSTER Privacy Policy
					</Heading>
					<Text>Hannah Beattie built My Worry Monster as a free app.</Text>
					<Text>The service is intended to be used as such.</Text>
					<Text>
						This page is used to inform visitors regarding policies with the collection,
						use, and disclosure of Personal Information for this service.
					</Text>
					<Text>
						If you choose to use this Service, you agree to the collection and use of
						information in relation with these policies.
					</Text>

					<Heading>Log Data</Heading>
					<Text>
						No data is logged or shared by the app; I do not have access to any user
						data at any time.
					</Text>
					<Heading>Cookies</Heading>
					<Text>This service does not imploy cookies</Text>
					<Heading>Service Providers</Heading>
					<Text>No third-party companes are employed with this service.</Text>
					<Heading>Security</Heading>
					<Text>
						My Worry Monster only stores user data locally, meaning no data can be
						shared by the app itself.
					</Text>
					<Heading>Changes</Heading>
					<Text>
						This Privacy Policy may be updated from time to time. Any changes will be
						desplayed here and take effect immediately
					</Text>
					<Heading>Contact</Heading>
					<Text>
						If you have any conserns or questions you may contact me ar
						hannahdbeattie@gmail.com
					</Text>
				</VStack>
			</Card>
		</VStack>
	)
}

export default Privacy
