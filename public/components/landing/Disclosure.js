import { Button, Container, HStack, Heading, Spacer, VStack, useDisclosure } from '@chakra-ui/react'
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
						<Heading>{title}</Heading>
						<VStack {...vstackProps}>{children}</VStack>
					</Container>
					<Container maxW={'70vw'}>
						<VStack {...disclosureProps} {...vstackProps}>
							{more}
						</VStack>
					</Container>

					<HStack px={2}>
						<Spacer />
						<Button
							zIndex={4}
							bg={'transparent'}
							size={'4xl'}
							_hover={{ bg: 'transparent' }}
							onClick={() => {
								console.log('disclosure is', disclosureProps)
							}}
							{...buttonProps}
						>
							{hidden ? (
								<FaChevronCircleDown fontSize={'8xl'} />
							) : (
								<FaChevronCircleUp fontSize={'8xl'} />
							)}
						</Button>
					</HStack>
				</Container>
			</VStack>
		</>
	)
}

export default Disclosure
