import {
	Button,
	Container,
	HStack,
	Heading,
	Spacer,
	Text,
	VStack,
	useDisclosure,
} from '@chakra-ui/react'
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'

function Disclosure({ title, children, props, intro, more }) {
	const { getDisclosureProps, getButtonProps } = useDisclosure()
	const buttonProps = getButtonProps()
	const disclosureProps = getDisclosureProps()
	const vstackProps = {
		alignItems: 'stretch',
	}
	const { hidden } = disclosureProps

	return (
		<>
			<VStack px={{ base: 4, lg: 20 }}>
				<Container
					py={{ base: 2, md: 4 }}
					backgroundColor={'gray.300'}
					borderRadius={'2xl'}
					shadow={'dark-lg'}
					color={'white'}
					fontFamily={'ariel'}
					fontWeight={'500'}
					fontSize={{ base: 'lg', sm: 'lg' }}
				>
					<Container>
						<Heading
							py={{ base: 2, sm: 4 }}
							color={'gray.900'}
							fontFamily={'Lora'}
							fontWeight={'200'}
							fontSize={{ base: 'xl', sm: '3xl' }}
						>
							{title}
						</Heading>
						<VStack {...vstackProps} color={'gray.900'} fontSize={{ sm: 'xl' }}>
							{children}
						</VStack>
					</Container>
					<Container mt={{ base: 4 }}>
						<VStack
							{...disclosureProps}
							{...vstackProps}
							color={'gray.900'}
							fontSize={{ sm: 'xl' }}
						>
							{more}
						</VStack>
					</Container>
					<HStack>
						<Spacer />
						<Button
							fontFamily={'Gaegu'}
							zIndex={4}
							bg={'gray.900'}
							w={{ base: 6, lg: 10 }}
							borderRadius={200}
							h={{ base: 6, lg: 10 }}
							size={'4xl'}
							_hover={{ bg: 'gray.700' }}
							onClick={() => {
								console.log('disclosure is', disclosureProps)
							}}
							{...buttonProps}
						>
							{hidden ? <Text>...</Text> : <Text>X</Text>}
						</Button>
					</HStack>
				</Container>
			</VStack>
		</>
	)
}

export default Disclosure
