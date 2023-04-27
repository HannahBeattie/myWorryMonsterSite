import { VStack, Text, Card, Heading, Spacer, Container } from '@chakra-ui/react'
import React from 'react'

function Privacy() {
	const headingProps = {
		fontFamily: 'Open Sans',
		fontSize: '2xl',
		fontWeight: 400,
	}
	return (
		<VStack flex={1} align={'center'} justify={'center'} px={4} py={8}>
			<Card
				shadow={'base'}
				bg={'white'}
				px={10}
				py={10}
				fontFamily={'Open Sans'}
				fontWeight={400}
				color={'black'}
				fontSize={'md'}
			>
				<VStack alignItems={'stretch'}>
					<Heading
						color={'cyan.800'}
						textTransform={'uppercase'}
						{...headingProps}
						fontWeight={600}
					>
						MY PET WORRY MONSTER Privacy Policy
					</Heading>

					<VStack
						py={4}
						fontFamily={'poppins'}
						alignItems={'stretch'}
						textTransform={'uppercase'}
						fontSize={'lg'}
						fontWeight={700}
						maxW={800}
					>
						<Text>Hannah Beattie built My Pet Worry Monster as a free app.</Text>
						<Text>The service is intended to be used as such.</Text>
						<Text>
							This page is used to inform visitors regarding policies with the
							collection, use, and disclosure of Personal Information for this
							service.
						</Text>
						<Text>
							If you choose to use this Service, you agree to the collection and use
							of information in relation with these policies.
						</Text>
					</VStack>

					<Spacer />

					<Heading {...headingProps}>Log Data</Heading>
					<Text>
						No data is logged or shared by the app; I do not have access to any user
						data at any time.
					</Text>
					<Spacer />
					<Heading {...headingProps}>Cookies</Heading>
					<Text>This service does not imploy cookies</Text>
					<Heading {...headingProps}>Service Providers</Heading>
					<Text>No third-party companes are employed with this service.</Text>
					<Spacer />
					<Heading f {...headingProps}>
						Security
					</Heading>

					<Text>
						My Worry Monster only stores user data locally, meaning no data can be
						shared by the app itself.
					</Text>
					<Spacer />
					<Heading {...headingProps}>Changes</Heading>
					<Text>
						This Privacy Policy may be updated from time to time. Any changes will be
						desplayed here and take effect immediately
					</Text>
					<Spacer />
					<Heading {...headingProps}>Contact</Heading>
					<Text>
						If you have any conserns or questions you may contact me at
						hannahdbeattie@gmail.com
					</Text>
				</VStack>
			</Card>
		</VStack>
	)
}

export default Privacy
