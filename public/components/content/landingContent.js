import { HStack, Heading, Link, List, Text, VStack } from '@chakra-ui/react'
import BlurbBox from '../landing/BlurbBox'
import IconListItem from '../landing/IconListItem'
import Disclosure from '../landing/Disclosure'
import StyledNextLink from '../nav/StyledNextLink'
import NextLink from 'next/link'

export const one = {
	item: (
		<BlurbBox title={'What is a worry Monster?'}>
			<Heading fontSize={'4xl'} color={'purple.300'}>
				What is a worry Monster?
			</Heading>
			<VStack>
				<Text>
					A worry monster would have you believe that they are terribly scaresome,
					fearsome creatures.
				</Text>
				<Text>
					In acutality, they are rather loveable, goofy critters who get their name from
					their unusual diet...
				</Text>
			</VStack>
		</BlurbBox>
	),
}

export const three = {
	item: (
		<BlurbBox>
			<Text>
				You see, if you give your worries to a worry monster they will hold on to them for
				as long as you wish.
			</Text>
			<Text>
				Should you ever be ready to part with a worry, they will gladly gobble it up.
			</Text>
			<Text>There is no worry too heavy, scary, small or big for a worry monster.</Text>
		</BlurbBox>
	),
}

export const four = {
	item: (
		<Disclosure
			props={{ fontSize: '2xl' }}
			title={'Why Worry?'}
			intro={'Worries can be useful sources of information, however...'}
			more={
				<>
					<Text>
						Now, they are like a smoke alarm with a low battery; Screaming warnings
						indistinguishable from the real thing.
					</Text>
					<Text>Or, they play the hits.</Text>
					<Text>Just as you are drifting off to sleep-</Text>
					<Text>
						Remember that horrible you did? Remember when your friend hurt your
						feelings? Remember when you were laughed at? Remember that time you felt
						foolish?
					</Text>
					<Text>Some of us are especially good at worrying.</Text>
					Our incredible skill can leave us breathless, shaking and quite literally
					petrified.
					<Text>How weak we feel! How lonely and retched and strange.</Text>
					<Text>
						Even though it would be absurd to presume that others do not also worry.
					</Text>
					<Text>
						Or perhaps that makes us feel worse; The thought that our worries are small
						and foolish and unworthy. The thought that such small things could freeze
						us.{' '}
					</Text>
					<Text>
						The extent to which our worries are useful or reflective of reality must
						ultimately be our own puzzle to solve, but one thing is certain; We should
						not feel ashamed, guilty or worried about our capacity to worry.
					</Text>
					<Text>
						Instead, we should look at our fear though a lens of patience, acceptance
						and curiosity. As though we were our very own dear friend.
					</Text>
				</>
			}
		>
			<Text>
				Worries can be useful sources of information, however, all too often, we use our
				imagination to furnish them with such looming, impregnable powers that we presume
				them unconquerable.
			</Text>
			<Text>Perhaps, once upon a time, our worries were useful. They kept us safe.</Text>
			<Text>Warned us of very real and present danger.</Text>
		</Disclosure>
	),
}

export const five = {
	item: (
		<Disclosure
			props={{ fontSize: '2xl' }}
			title={'CBT and the Wisdom of Worries'}
			intro={
				'Based on cognitive behavioural techniques ideas My Worry Monster draws ideas from; Creating a neutral, non-judgemental space that can be useful for: '
			}
			more={
				<>
					<List pt={4}>
						<IconListItem>Identifying patterns and triggers</IconListItem>
						<IconListItem>
							Externalising and defining the limits of a worry
						</IconListItem>

						<IconListItem>Creating distance and perspective</IconListItem>

						<IconListItem>Clarifying specific causes of a worry</IconListItem>
						<IconListItem>Problem-solving</IconListItem>
						<IconListItem>Tracking progress</IconListItem>
					</List>

					<Text>
						Sometimes our brains be filled with all sorts of invisible monsters. What
						might happen if we treated them with kindness and acceptance?
					</Text>
				</>
			}
		>
			<Text>
				Based on the ideas around cognitive-behavioural therapy, My Worry Monster allows
				users to keep track of their worries in a neutral, non-judgemental and private
				environment.
			</Text>
		</Disclosure>
	),
}
export const six = {
	item: (
		<BlurbBox>
			<VStack fontSize={'2xl'} alignItems={'stretch'}>
				<Heading>About the creator</Heading>
				<Text>
					Hannah Beattie is a freelance artist, coder and storyteller from Aotearoa, New
					Zealand.
				</Text>
				<Text>
					She credits her insatiable curiosity to her autism and ADHD and is interested in
					destigmatizing difference and bringing neutral language into mental health and
					disability conversations.
				</Text>

				<HStack>
					<Text>You can Check out her website</Text>
					<NextLink
						target='blank'
						href={'https://brain-storm-delta.vercel.app/'}
						passHref
						legacyBehavior
					>
						<Link
							_hover={{
								textDecoration: 'none',
							}}
						>
							<Text color={'cyan.400'}>here.</Text>
						</Link>
					</NextLink>
				</HStack>

				<HStack>
					<Text>Or Read The Worry Monster origin story </Text>
					<NextLink href={'/about'} passHref legacyBehavior>
						<Link
							_hover={{
								textDecoration: 'none',
							}}
						>
							<Text color={'teal.400'}>here.</Text>
						</Link>
					</NextLink>
				</HStack>
			</VStack>
		</BlurbBox>
	),
}

export function getItem(key) {
	switch (key) {
		case 'one':
			return one.item
		case 'two':
			return two.item
		case 'three':
			return three.item
		case 'four':
			return four.item
		case 'five':
			return five.item
		case 'six':
			return six.item

		default:
			return null // handle invalid key
	}
}
