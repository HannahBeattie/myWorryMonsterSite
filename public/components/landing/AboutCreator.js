import { Center, Container, HStack, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import { getItem } from '../content/landingContent'
const sec6 = getItem('six')
function AboutCreator() {
	return (
		<>
			<HStack py={10} px={8}>
				<Container>{sec6}</Container>
				<Center>
					<Image
						display={{ base: 'none', lg: 'flex' }}
						maxH={300}
						maxW={300}
						src={'/assets/mnstr/9.png'}
						alt={'doodle of a flower'}
					/>
				</Center>
			</HStack>
			<Center>
				<Image
					display={{ base: 'flex', lg: 'none' }}
					maxH={300}
					maxW={300}
					src={'/assets/mnstr/9.png'}
					alt={'doodle of a flower'}
				/>
			</Center>
		</>
	)
}

export default AboutCreator
