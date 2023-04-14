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
	console.log('disclosure is', disclosureProps)
	const { hidden } = disclosureProps

	return (
		<>
			<VStack px={20}>
				<Container
					bg={'gray.200'}
					py={4}
					borderRadius={'2xl'}
					shadow={'dark-lg'}
					fontFamily={'Lora'}
					fontWeight={'500'}
					fontSize={'lg'}
				>
					<Container>
						<Heading color={'black'} py={4} fontFamily={'Lora'} fontWeight={'400'}>
							{title}
						</Heading>
						<VStack {...vstackProps} color={'black'}>
							{children}
						</VStack>
					</Container>

					<Container>
						<VStack {...disclosureProps} {...vstackProps} color={'black'}>
							{more}
						</VStack>
					</Container>
					<HStack>
						<Spacer />
						<Button
							zIndex={4}
							bg={'gray.900'}
							w={10}
							borderRadius={200}
							h={10}
							size={'4xl'}
							_hover={{ bg: 'cyan.800' }}
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
