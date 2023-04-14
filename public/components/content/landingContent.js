import { Heading, List, Text, VStack } from '@chakra-ui/react'
import BlurbBox from '../landing/BlurbBox'
import IconListItem from '../landing/IconListItem'

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

export const five = {
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
		case 'five':
			return five.item

		default:
			return null // handle invalid key
	}
}
