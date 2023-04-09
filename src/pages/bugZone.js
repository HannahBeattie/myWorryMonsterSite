import React from 'react'
import Feature from '../../public/components/landing/Feature'
import { Text, VStack } from '@chakra-ui/react'

function BugZone() {
	return (
		<VStack flex={1} alignItems={'stretch'}>
			<Feature>
				<Text>Hello</Text>
			</Feature>
		</VStack>
	)
}

export default BugZone
