import { Center, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import HTMLFlipBook from 'react-pageflip'

const props = {
	bg: 'gray.800',
	h: 500,
	p: 8,
	alignItems: 'stretch',
	fontSize: { base: 'lg', lg: '2xl' },
	spacing: 8,
}
function Creator() {
	return (
		<VStack flex={1}>
			<HTMLFlipBook width={800} height={500} usePortrait={'true'}>
				<div className='demoPage'>
					<VStack {...props}>
						<Text>
							When I was a child I was terribly afraid. One of my many fears was the
							monster that lived under my bed. My heart would race and my mouth would
							feel dry and all of me would tremble as I thought of him watching,
							waiting, hungry. To add complication to my tiny racing mind, I also felt
							terribly guilty. I worried that my fear would hurt the monster's
							feelings. I worried the monster would feel lonely, ugly and embarrassed.
							I worried that the monster would have no friends. One day, in a show of
							good faith, I dangled my little feet under the bed and introduced myself
							to the monster.
						</Text>
					</VStack>
				</div>
				<div className='demoPage'>
					<VStack {...props}>
						<Text>
							I promised to be his friend if he promised not to gobble me up. It
							seemed to work, as I was not gobbled up and after a while, I began to
							tell the worry monster about my troubles and he would listen, invisible
							and patient. I grew up, as we all must, and was eventually diagnosed
							with Autism, ADHD, CPTSD and treatment-resistant depression; Practically
							a whole alphabet of neuro-differences! Most of those conditions involve
							feeling afraid or angry or angry about feeling afraid. Or ashamed about
							feeling angry about being ashamed. They can feel very uncomfortable in
							my brain.
						</Text>
					</VStack>
				</div>
				<div className='demoPage'>
					<VStack {...props}>
						Luckily, I have kept my promise. That is, I have tried terribly hard to
						treat all of the lonely, scared, unpredictable and monstrous-feeling parts
						of my mind with kindness and patience. I have continued to befriend the
						monster and treat it as I would a friend; With compassion, humour and a
						great deal of forgiveness. I wanted to share My Worry Monster, in the hopes
						that it may keep others company too, and as a reminder not to feel too bad
						for feeling bad.
					</VStack>
				</div>
			</HTMLFlipBook>
		</VStack>
	)
}

export default Creator
