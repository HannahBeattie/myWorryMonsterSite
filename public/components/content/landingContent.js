import { List, Text } from '@chakra-ui/react'
import BlurbBox from '../landing/BlurbBox'
import IconListItem from '../IconListItem'

export const one = {
	item: (
		<BlurbBox title={'What is a worry Monster?'}>
			<Text>A Worry Monster likes to think of themselves as terribly scary.</Text>
			<Text>In actuality, they are rather goofy lovable critters.</Text>
			<Text>
				If you give your worry to a Worry Monster, they will hold onto it for as long as you
				would like.
			</Text>
			<Text>No worry is too big, scary or heavy for a Worry Monster to carry.</Text>
			<Text>
				When you are ready to let go of a worry, the Worry Monster will simply gobble it up.
			</Text>
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

export const three = {
	item: (
		<BlurbBox title={'About the creator'}>
			<Text>Hannah is an independent artist and worrier.</Text>
			<Text>
				After being diagnosed with C-PTSD, autism and ADHD they have spent a lot of their
				time looking for ways to befriend hurt, uncomfortable and confusing parts of their
				brain.
			</Text>
			<Text>My Worry Monster is their first independent release.</Text>
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
