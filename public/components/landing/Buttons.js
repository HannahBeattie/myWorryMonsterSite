import { Box, Button, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const btnProps = {
	backgroundColor: 'whiteAlpha.50',
	boxShadow: 'lg',
	fontSize: { base: 'xl', lg: '2xl' },
	color: 'gray.100',
	_hover: { color: 'purple.200' },
	p: 6,
}
function Buttons() {
	return (
		<VStack alignItems={'stretch'}>
			<Text fontSize={'xl'} textAlign={{ base: 'center', sm: 'start' }}>
				Available on
			</Text>
			<Box maxW={300}>
				<SimpleGrid columns={{ base: 2, sm: 2 }} columnGap={2} rowGap={2}>
					<Button {...btnProps}>IOS</Button>
					<Button {...btnProps}>Android</Button>
				</SimpleGrid>
			</Box>
		</VStack>
	)
}

export default Buttons
