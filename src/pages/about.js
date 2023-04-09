import { Center, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Feature from '../../public/components/landing/Feature'
import MonsterImage from '../../public/components/landing/MonsterImage'
import { getItem } from '../../public/components/content/landingContent'

function About() {
	const sec2 = getItem('two')
	return (
		<VStack flex={1} alignItems={'stretch'}>
			<Feature
				right={true}
				bg={'transparent'}
				image={
					<MonsterImage
						im={3}
						props={{
							borderRadius: 20,
							mt: 0,
							mb: 0,
							alignItems: 'center',
							jusify: 'cener',
							py: 100,
						}}
					/>
				}
			>
				{sec2}
			</Feature>
		</VStack>
	)
}

export default About
