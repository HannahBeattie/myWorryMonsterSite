import { Image, Text } from '@chakra-ui/react'
import BlurbBox from '../landing/BlurbBox'

export const first = {
	content: (
		<BlurbBox>
			<Text>When I was a child I was terribly afraid. </Text>
			<Text>One of my many fears was the monster that lived under my bed. </Text>
		</BlurbBox>
	),

	img: (
		<Image
			shadow={'dark-lg'}
			borderRadius={50}
			maxH={{ md: 600, lg: 500 }}
			maxW={{ base: 100, md: 800, lg: 900 }}
			src={'/assets/scared.png'}
			alt={'scared kid'}
		/>
	),
}

export const seccond = {
	content: (
		<BlurbBox>
			<Text>
				My heart would race and my mouth would feel dry and all of me would tremble as I
				thought of him watching, waiting, hungry.
			</Text>
		</BlurbBox>
	),

	img: (
		<Image
			shadow={'dark-lg'}
			borderRadius={50}
			maxH={{ md: 600, lg: 500 }}
			maxW={{ base: 100, md: 800, lg: 900 }}
			src={'/assets/feet.png'}
			alt={'feet'}
		/>
	),
}

export const third = {
	content: (
		<BlurbBox>
			<Text>To add complication to my tiny racing mind, I also felt terribly guilty.</Text>
			<Text>I worried that my fear would hurt the monster&apos;s feelings.</Text>
			<Text>I worried the monster would feel lonely, ugly and embarrassed.</Text>
			<Text>I worried that the monster would have no friends.</Text>
		</BlurbBox>
	),

	img: (
		<Image
			shadow={'dark-lg'}
			borderRadius={50}
			maxH={{ md: 600, lg: 500 }}
			maxW={{ base: 100, md: 800, lg: 900 }}
			src={'/assets/feet.png'}
			alt={'feet'}
		/>
	),
}

export const forth = {
	content: (
		<BlurbBox>
			<Text>
				One day, in a show of good faith, I dangled my little feet under the bed and
				introduced myself to the monster.
			</Text>
			<Text>
				I promised to be his friend if he promised not to gobble me up. It seemed to work,
				as I was not gobbled up and after a while, I began to tell the worry monster about
				my troubles and he would listen, invisible and patient.
			</Text>
			<Text>
				grew up, as we all must, and was eventually diagnosed with Autism, ADHD, CPTSD and
				treatment-resistant depression; Practically a whole alphabet of neuro-differences!
			</Text>
			<Text>
				Most of those conditions involve feeling afraid or angry or angry about feeling
				afraid. Or ashamed about feeling angry about being ashamed. They can feel very
				uncomfortable in my brain.
			</Text>
		</BlurbBox>
	),

	img: (
		<Image
			shadow={'dark-lg'}
			borderRadius={50}
			maxH={{ md: 600, lg: 500 }}
			maxW={{ base: 100, md: undefined }}
			src={'/assets/feet.png'}
			alt={'feet'}
		/>
	),
}

export function getSec(key) {
	switch (key) {
		case 'first':
			return first
		case 'seccond':
			return seccond

		default:
			return null // handle invalid key
	}
}
