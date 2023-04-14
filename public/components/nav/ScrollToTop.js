import { Button, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

function ScrollToTop() {
	return (
		<HStack>
			<Button
				bg={'transparent'}
				borderRadius={200}
				shadow={'inner'}
				_hover={{ bg: 'transparent' }}
				onClick={() => {
					window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
				}}
			>
				<Text color={'pink.300'} textAlign={'center'} fontSize={'2xl'} pt={4}>
					Back to top
				</Text>
			</Button>
			<Spacer />
		</HStack>
	)
}

export default ScrollToTop
