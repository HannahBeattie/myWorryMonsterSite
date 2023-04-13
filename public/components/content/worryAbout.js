import { Box, Image, Text, VStack } from '@chakra-ui/react'
import BlurbBox from '../landing/BlurbBox'

const imProps = {
	maxH: { base: 300, md: 400, lg: 500 },
	mt: 8,
}

export const first = {
	content: (
		<BlurbBox>
			<Text>When I was a child I was MOST TERRIBLY afraid. </Text>
		</BlurbBox>
	),

	img: (
		<Image
			shadow={'dark-lg'}
			borderRadius={50}
			{...imProps}
			src={'/assets/scared.png'}
			alt={'scared kid'}
		/>
	),
}
export const firstPR = {
	content: (
		<BlurbBox>
			<Text>One of my MANY fears was the monster under my bed.</Text>
		</BlurbBox>
	),

	img: <Image {...imProps} src={'/assets/mnstr/22.png'} alt={'scared kid'} />,
}

export const seccond = {
	content: (
		<BlurbBox>
			<Text>
				My heart would race and my mouth would go dry as I thought of him watching...
				waiting... HUNGRY.
			</Text>
		</BlurbBox>
	),

	img: (
		<Image
			shadow={'dark-lg'}
			borderRadius={50}
			src={'/assets/mnstr/3.png'}
			alt={'feet'}
			{...imProps}
		/>
	),
}

export const third = {
	content: (
		<BlurbBox>
			<Text>My poor little mind did not stop there.</Text>
			<Text>I also felt GUILTY.</Text>
			<Text>I worried about hurting the monster&apos;s feelings.</Text>
			<Text>I worried the monster would feel ugly, lonely and embarrassed.</Text>
			<Text>I worried that the monster would wish it were not a monster.</Text>
		</BlurbBox>
	),

	img: <Image {...imProps} src={'/assets/mnstr/4.png'} alt={'feet'} />,
}

export const forth = {
	content: (
		<BlurbBox>
			<Text>So one day I did the VERY BRAVE THING.</Text>
			<Text>
				That is, in a show of good faith, I dangled my little feet under the bed and said
				&quot;Hello. My name is Hannah. Will you be my friend?&quot;
			</Text>
		</BlurbBox>
	),

	img: (
		<Image
			shadow={'dark-lg'}
			borderRadius={50}
			{...imProps}
			src={'/assets/feet.png'}
			alt={'feet'}
		/>
	),
}
export const fifth = {
	content: (
		<BlurbBox>
			<Text>So, we were friends. Just like that.</Text>
			<Text>
				For hours, he would sit beside me and listen, in his very special, patient,
				invisable way. I would tell him adventure stories. I would tell him worries. I would
				tell him all the things that made me feel very confused or alone.
			</Text>
		</BlurbBox>
	),

	img: (
		<Image
			shadow={'dark-lg'}
			borderRadius={50}
			{...imProps}
			src={'/assets/mnstr/7.png'}
			alt={'feet'}
		/>
	),
}

export const sixth = {
	content: (
		<BlurbBox>
			<Text>After a while, I grew up.</Text>
			<Text>I was diagnosed with some fancy-sounding alphabet letters-</Text>
			<Text>*ASD, ADHD, CPTSD and MDD</Text>
			<Text>
				These alphabet letters can make my brain feel very loud and uncomfortable at times.
			</Text>
			<Text fontSize={'lg'}>
				*ASD is for : Autism spectrum disorder, ADHD is for: Attention Deficit Hyperactivity
				Disorder, CPTSD is for : Complex PTSD & MDD is for major depressive disorder
			</Text>
		</BlurbBox>
	),

	img: <Image {...imProps} src={'/assets/mnstr/88.png'} alt={'feet'} />,
}

export const seventh = {
	content: (
		<BlurbBox>
			<Text>
				Luckily, I have kept my promise. That is, as scared as I feel, I will try my best to
				be kind to the monster.
			</Text>
			<Text>
				When I glimpse something ugly, scary and looming in of the corner of my mind, I will
				try my best to meet it as a friend, with kindness, compassion and as much patience
				as I can bare.
			</Text>
		</BlurbBox>
	),
	img: <Image {...imProps} src={'/assets/mnstr/9.png'} alt={'feet'} />,
}

export const eight = {
	content: (
		<BlurbBox>
			<Text>
				I wanted to share My Worry Monster with anyone who needs a friend. As a small
				reminder that it is ok to be TERRIBLY AFRAID. You don&apos;t have to feel bad about
				feeling bad.
			</Text>
			<Text>A monster is just a monster, after all.</Text>
		</BlurbBox>
	),
	img: (
		<Image
			shadow={'dark-lg'}
			borderRadius={50}
			{...imProps}
			src={'/assets/mnstr/aspie.png'}
			alt={'feet'}
		/>
	),
}
export function getSec(key) {
	switch (key) {
		case 'first':
			return first
		case 'firstPR':
			return firstPR
		case 'seccond':
			return seccond
		case 'third':
			return third
		case 'forth':
			return forth
		case 'fifth':
			return fifth
		case 'sixth':
			return sixth
		case 'seventh':
			return seventh
		case 'eight':
			return eight

		default:
			return null // handle invalid key
	}
}
