import { Center, Container, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import { getItem } from '../content/landingContent'
const sec6 = getItem('six')
function AboutCreator() {
	return (
		<SimpleGrid>
			<Center>
				<Image
					maxH={300}
					maxW={300}
					src={'/assets/mnstr/TG.png'}
					alt={'doodle of a person holding hands with the worry monster and smiling'}
				/>
			</Center>

			<Container>{sec6}</Container>
			<Center>
				<Image
					maxH={300}
					maxW={300}
					src={'/assets/mnstr/9.png'}
					alt={'doodle of a flower'}
				/>
			</Center>
		</SimpleGrid>
	)
}

export default AboutCreator
