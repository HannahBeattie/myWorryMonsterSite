import { Box, Image, Text, VStack } from '@chakra-ui/react'
import BlurbBox from '../landing/BlurbBox'

const imProps = {
	maxH: { base: 300, md: 400, lg: 500 },
	mt: 8,
}

export const first = {
	content: (
		<BlurbBox>
			<Text>When I was a child I was VERY VERY SCARED. </Text>
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
				My heart would THUMP like a DRUM and my mouth would feel like glue as I thought of
				it watching... waiting... HUNGRY.
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

export const twoPointTwo = {
	content: (
		<BlurbBox>
			<Text>I made many PLANS, PATHS and SCHEMES to trick the monster.</Text>
		</BlurbBox>
	),

	img: <Image {...imProps} src={'/assets/mnstr/trk.png'} alt={'feet'} />,
}

export const twoPointThree = {
	content: (
		<BlurbBox>
			<Text>...but I didn&apos;t feel much safer.</Text>
		</BlurbBox>
	),

	img: (
		<Image
			{...imProps}
			shadow={'dark-lg'}
			borderRadius={50}
			src={'/assets/scared.png'}
			alt={'feet'}
		/>
	),
}

export const third = {
	content: (
		<BlurbBox>
			<Text>Worst of all, I felt terribly, sickningly, GUILTY.</Text>
			<Text>I worried about hurting the monster&apos;s feelings.</Text>
			<Text>I worried the monster would feel ugly, lonely and embarrassed.</Text>
			<Text>I worried it would wish it wasn&apos;t a monster.</Text>
		</BlurbBox>
	),

	img: <Image {...imProps} src={'/assets/mnstr/4.png'} alt={'feet'} />,
}

export const forth = {
	content: (
		<BlurbBox>
			<Text>So one day I did the VERY BRAVE THING.</Text>
			<Text>
				In a show of good faith, I took a DEEP BREATH and dangled my little bare feet under
				the bed.
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
			<Text>Of-cores this meant that me and the monster were friends.</Text>
			<Text>BEST FRIENDS.</Text>
			<Text>
				He would sit beside me; Patient, scary and invisable and I would tell him stories.
			</Text>
			<Text>
				I would tell him things that made me feel confused or bad or sick and he would
				listen and tell jokes. He never became bored or angry or impatient.
			</Text>
		</BlurbBox>
	),

	img: (
		<Image
			shadow={'dark-lg'}
			borderRadius={50}
			{...imProps}
			src={'/assets/mnstr/us.png'}
			alt={'feet'}
		/>
	),
}

export const sixth = {
	content: (
		<BlurbBox>
			<Text>After a while, I grew up.</Text>
			<Text>I was diagnosed with some fancy alphabet letters-</Text>
			<Text>*ASD, ADHD, CPTSD and MDD.</Text>
			<Text>
				I was told that these alphabet letters could make your brain feel very loud and
				tired.
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
			<Text>Luckily, I have kept my promise-</Text>
			<Text>I have been done my very best to be patient and kind with the monster.</Text>
			<Text>Even when I feel as though I may be swallowed all up.</Text>
		</BlurbBox>
	),
	img: <Image {...imProps} src={'/assets/mnstr/9.png'} alt={'feet'} />,
}

export const eight = {
	content: (
		<BlurbBox>
			<Text>I want to share My Worry Monster with anyone who needs or wants a friend.</Text>
			<Text>
				As a gentle reminder that there is no need to be afraid of being afraid...a monster
				is just a monster, after all.
			</Text>
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
		case 'twoPointTwo':
			return twoPointTwo
		case 'twoPointThree':
			return twoPointThree
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
