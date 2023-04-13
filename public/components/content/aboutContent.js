import { Image, Text } from '@chakra-ui/react'
import BlurbBox from '../landing/BlurbBox'
const imProps = {
	maxH: { base: 300, md: 400, lg: 500 },
	mt: 8,
}
export const aboutContent = [
	{
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
	},
	{
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
	},
	{
		content: (
			<BlurbBox>
				<Text>One of my MANY fears was the monster under my bed.</Text>
			</BlurbBox>
		),

		img: <Image {...imProps} src={'/assets/mnstr/22.png'} alt={'scared kid'} />,
	},
	{
		content: (
			<BlurbBox>
				<Text>
					My heart would THUMP like a DRUM and my mouth would feel like cotton and glue as
					I thought of his HUNGRY, SNARLING, GROWLS.
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
	},
	{
		content: (
			<BlurbBox>
				<Text>I made many PLANS, PATHS and SCHEMES with witch to trick the monster.</Text>
			</BlurbBox>
		),

		img: <Image {...imProps} src={'/assets/mnstr/trk.png'} alt={'feet'} />,
	},
	{
		content: (
			<BlurbBox>
				<Text>...but my tummy still hurt.</Text>
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
	},
	{
		content: (
			<BlurbBox>
				<Text>I worried about hurting the monster&apos;s feelings.</Text>
				<Text>What if it felt ugly, lonely or embarrassed?</Text>
				<Text>What if he wished he wasn&apos;t a monster at all?</Text>
				<Text>What if it wanted a friend?</Text>
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
	},
	{
		content: (
			<BlurbBox>
				<Text>So one day, I did the VERY BRAVE THING...</Text>
				<Text>
					In a show of good faith, I took a DEEP BREATH and dangled my little feet off the
					bed.
				</Text>
			</BlurbBox>
		),

		img: <Image {...imProps} src={'/assets/mnstr/foots.png'} alt={'feet'} />,
	},
	{
		content: (
			<BlurbBox>
				<Text>Which meant, of cores, that we were friends.</Text>
				<Text>
					The Monster would sit beside me- Patient, scary and invisable and I would tell
					him stories.
				</Text>
				<Text>
					I would make him laugh and make up stories and tell him about things that made
					me feel confused or bad or sick.
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
	},
	{
		content: (
			<BlurbBox>
				<Text>Eventually, I grew-</Text>
				<Text>All the way into a grown-up.</Text>
				<Text>I was diagnosed with some fancy alphabet letters;</Text>
				<Text>*ASD, ADHD, CPTSD and MDD.</Text>
				<Text>
					I was told that these alphabet letters could make my brain very loud and tired
					sometimes.
				</Text>
				<Text fontSize={'lg'}>
					*ASD is for : Autism spectrum disorder, ADHD is for: Attention Deficit
					Hyperactivity Disorder, CPTSD is for : Complex PTSD & MDD is for major
					depressive disorder
				</Text>
			</BlurbBox>
		),

		img: <Image {...imProps} src={'/assets/mnstr/88.png'} alt={'feet'} />,
	},
	{
		content: (
			<BlurbBox>
				<Text>But it&apos;s ok because, I have kept my promise.</Text>
				<Text>That is, I know very well how to be patient and kind with monsters.</Text>
				<Text>Even when it feels as though you may be swallowed up, GULP!</Text>
			</BlurbBox>
		),
		img: <Image {...imProps} src={'/assets/mnstr/9.png'} alt={'feet'} />,
	},
	{
		content: (
			<BlurbBox>
				<Text>
					So, if you would like a friend, you could do a lot worse than a worry monster...
				</Text>
				<Text>Even though you are VERY, VERY brave.</Text>
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
	},
]
