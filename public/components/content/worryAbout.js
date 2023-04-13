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
			src={'/assets/mnstr/s2.png'}
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
				it watching, waiting, HUNGRY.
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
			<Text>
				I made many PLANS, PATHS and SCHEMES with witch to trick the monster and excape.
			</Text>
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
			src={'/assets/mnstr/s1.png'}
			alt={'feet'}
		/>
	),
}

export const third = {
	content: (
		<BlurbBox>
			<Text>I worried about hurting the monster&apos;s feelings.</Text>
			<Text>I worried the monster would feel ugly, lonely and embarrassed.</Text>
			<Text>I worried the monster would wish it wasn&apos;t a monster at all.</Text>
		</BlurbBox>
	),

	img: (
		<Image
			{...imProps}
			borderRadius={50}
			shadow={'dark-lg'}
			src={'/assets/mnstr/no.png'}
			alt={'feet'}
		/>
	),
}
export const thirdPointThree = {
	content: (
		<BlurbBox>
			<Text>I also felt terribly GUILTY.</Text>
		</BlurbBox>
	),

	img: <Image {...imProps} src={'/assets/mnstr/4.png'} alt={'feet'} />,
}

export const forth = {
	content: (
		<BlurbBox>
			<Text>So one day I did the VERY BRAVE THING...</Text>
			<Text>
				In a show of good faith, I took a DEEP BREATH and dangled my little feet off the
				bed.
			</Text>
		</BlurbBox>
	),

	img: <Image {...imProps} src={'/assets/mnstr/foots.png'} alt={'feet'} />,
}
export const fifth = {
	content: (
		<BlurbBox>
			<Text>So the monser and I became friends. </Text>
			<Text>
				He would sit beside me; Patient, scary and invisable and I would tell him stories.
			</Text>
			<Text>
				I would tell him about things that made me feel confused or bad or sick and He would
				tell me all about being a monster.
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
				I was told that these alphabet letters could make my brain feel very loud and very
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
			<Text>Even when I feel like I might be swallowed up.</Text>
		</BlurbBox>
	),
	img: <Image {...imProps} src={'/assets/mnstr/9.png'} alt={'feet'} />,
}

export const eight = {
	content: (
		<BlurbBox>
			<Text>
				So, if you would like a friend, you could do a lot worse than a worry monster...
			</Text>
			<Text>Even though you are obviously very, very brave.</Text>
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
		case 'thirdPointThree':
			return thirdPointThree
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
