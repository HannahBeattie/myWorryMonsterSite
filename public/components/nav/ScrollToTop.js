import { Button, Center, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

function ScrollToTop() {
	return (
		<Center>
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
					<Text color={'gray.500'} textAlign={'center'} fontSize={{ md: '2xl' }} pt={4}>
						Back to top
					</Text>
				</Button>
				<Spacer />
			</HStack>
		</Center>
	)
}

export default ScrollToTop
