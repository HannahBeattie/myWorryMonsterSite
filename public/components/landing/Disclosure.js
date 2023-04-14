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
		spacing: 4,
	}
	console.log('disclosure is', disclosureProps)
	const { hidden } = disclosureProps

	return (
		<>
			<VStack fontSize={'3xl'} px={20}>
				<Container bg={'blackAlpha.800'} py={4} borderRadius={'2xl'} shadow={'dark-lg'}>
					<Container maxW={'70vw'}>
						<Heading color={'gray.300'} py={4}>
							{title}
						</Heading>
						<VStack {...vstackProps}>{children}</VStack>
					</Container>

					<Container maxW={'70vw'}>
						<VStack {...disclosureProps} {...vstackProps}>
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
