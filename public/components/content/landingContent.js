import { List, Text, VStack } from '@chakra-ui/react'
import BlurbBox from '../landing/BlurbBox'
import IconListItem from '../landing/IconListItem'

export const one = {
	item: (
		<BlurbBox title={'What is a worry Monster?'}>
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
			{/* <Text>Hannah is an independent artist and worrier.</Text>
			<Text>
				After being diagnosed with C-PTSD, autism and ADHD they have spent a lot of their
				time looking for ways to befriend hurt, uncomfortable and confusing parts of their
				brain.
			</Text>
			<Text>My Worry Monster is their first independent release.</Text> */}
		</BlurbBox>
	),
}

export const two = {
	item: (
		<BlurbBox title={'What is a monster anyway?'}>
			<Text>
				When I was five I was terrified of the proverbial monster under the bed. My heart
				would race and the more I thought about it, the more vivid and looming it became.
			</Text>
			<Text>
				I would whisper to the monster “Please don’t eat me!”. I would bargain and beg. And
				every day, in my mind, the monster grew.
			</Text>
			<Text>
				After a bit, the fear was joined with guilt. I worried about hurting the monster’s
				feelings. I worried about making it feel bad and ugly and alone. I worried it might
				have no friends.
			</Text>
			<Text>
				So, I decided, that whether it ate me alive or not, I would try my best to befriend
				the monster.
			</Text>
			<Text>I am still very much trying.</Text>
		</BlurbBox>
	),
}

export const four = {
	item: (
		<BlurbBox title={'CBT'}>
			<Text>
				Worries can serve important functions in our life. They can also turn into great
				looming, invisible threats.
			</Text>
			<Text>
				Based on the ideas around cognitive-behavioural therapy, My Worry Monster allows
				users to keep track of their worries in a neutral, non-judgemental and private
				environment.
			</Text>

			<Text>This can be useful for :</Text>
			<List>
				<IconListItem>Identifying patterns and triggers</IconListItem>
				<IconListItem>Externalising and defining the limits of a worry</IconListItem>

				<IconListItem>Creating distance and perspective</IconListItem>

				<IconListItem>Clarifying specific causes of a worry</IconListItem>
				<IconListItem>Problem-solving</IconListItem>
				<IconListItem>Tracking progress</IconListItem>
			</List>

			<Text>
				Sometimes our brains be filled with all sorts of invisible monsters. What might
				happen if we treated them with kindness and acceptance?
			</Text>
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

		default:
			return null // handle invalid key
	}
}
