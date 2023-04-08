import Head from 'next/head'
import { Inter } from 'next/font/google'
import {
	VStack,
	Text,
	Heading,
	HStack,
	SimpleGrid,
	Grid,
	GridItem,
	ButtonGroup,
	Button,
	Stack,
	Container,
	Image,
	List,
	ListItem,
	ListIcon,
} from '@chakra-ui/react'
import MonsterImage from '../../public/components/MonsterImage'
import LndImg from '../../public/components/LndImg'
import BgImage from '../../public/components/BgImage'
import Display from '../../public/components/landing/Display'
import { FaPlus, FaPlusCircle } from 'react-icons/fa'
import IconListItem from '../../public/components/IconListItem'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>My Worry Monster</title>
				<meta name='description' content='My Worry Monster app by Hannah Beattie' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/icons/favicon.png' />
			</Head>

			<VStack flex={1} alignItems={'stretch'} as={'main'} spacing={4} py={4} pb={'5vh'}>
				<LndImg />
				<Display
					bg={'transparent'}
					image={
						<MonsterImage
							mood={'ph'}
							props={{
								mt: 0,
								maxH: 600,
								borderRadius: 20,
								shadow: false,
								className: 'shadow',
							}}
						/>
					}
				>
					<Container>
						<VStack spacing={8} fontSize={'2xl'}>
							<Heading>What is a worry monster?</Heading>
							<Text>
								A Worry Monster likes to think of themselves as terribly scary.
							</Text>
							<Text>In actuality, they are rather goofy lovable critters.</Text>
							<Text>
								If you give your worry to a Worry Monster, they will hold onto it
								for as long as you would like.
							</Text>
							<Text>
								No worry is too big, scary or heavy for a Worry Monster to carry.
							</Text>
							<Text>
								When you are ready to let go of a worry, the Worry Monster will
								simply gobble it up.
							</Text>
						</VStack>
					</Container>
				</Display>
				<Display
					right={true}
					bg={'transparent'}
					image={
						<MonsterImage
							mood={'ph2'}
							props={{
								mt: 0,
								maxH: 600,
								borderRadius: 20,
								shadow: false,
								className: 'shadow',
							}}
						/>
					}
				>
					<Container>
						<VStack fontSize={'2xl'} spacing={8}>
							<Heading>Meeting monsters</Heading>
							<VStack spacing={8} alignItems={'stretch'} justify={'start'}>
								<Text>
									When I was five I was terrified of the proverbial monster under
									the bed. My heart would race and the more I thought about it,
									the more vivid and looming it became.
								</Text>
								<Text>
									I would whisper to the monster “Please don’t eat me!”. I would
									bargain and beg. And every day, in my mind, the monster grew.
								</Text>
								<Text>
									After a bit, the fear was joined with guilt. I worried about
									hurting the monster’s feelings. I worried about making it feel
									bad and ugly and alone. I worried it might have no friends.
								</Text>
								<Text>
									So, I decided, that whether it ate me alive or not, I would try
									my best to befriend the monster.
								</Text>
								<Text>I am still very much trying.</Text>
							</VStack>
						</VStack>
					</Container>
				</Display>
				<Display
					bg={'transparent'}
					image={<Image alt={'spatter'} src={'/assets/bg/spat.png'} />}
				>
					<Container>
						<VStack space={2} fontSize={'2xl'} spacing={8}>
							<Heading>About the creator</Heading>
							<VStack spacing={8} alignItems={'stretch'} justify={'start'}>
								<Text>Hannah is an independent artist and worrier.</Text>
								<Text>
									After being diagnosed with C-PTSD, autism and ADHD they have
									spent a lot of their time looking for ways to befriend hurt,
									uncomfortable and confusing parts of their brain.
								</Text>
								<Text>My Worry Monster is their first independent release.</Text>
							</VStack>
						</VStack>
					</Container>
				</Display>
				<Display
					right={true}
					bg={'transparent'}
					image={
						<MonsterImage
							mood={'ph'}
							props={{
								mt: 0,
								maxH: 600,
								borderRadius: 20,
								shadow: false,
								className: 'shadow',
							}}
						/>
					}
				>
					<Container>
						<VStack fontSize={'2xl'}>
							<Heading>Why worry?</Heading>
							<VStack spacing={8}>
								<VStack>
									<Text>
										Worries can serve important functions in our life. They can
										also turn into great looming, invisible threats.
									</Text>
									<Text>
										Based on the ideas around cognitive-behavioural therapy, My
										Worry Monster allows users to keep track of their worries in
										a neutral, non-judgemental and private environment.
									</Text>
								</VStack>
								<VStack>
									<Text>This can be useful for :</Text>
									<List>
										<IconListItem>
											Identifying patterns and triggers
										</IconListItem>
										<IconListItem>
											Externalising and defining the limits of a worry
										</IconListItem>

										<IconListItem>
											Creating distance and perspective
										</IconListItem>

										<IconListItem>
											Clarifying specific causes of a worry
										</IconListItem>
										<IconListItem>Problem-solving</IconListItem>
										<IconListItem>Tracking progress</IconListItem>
									</List>
								</VStack>
								<VStack>
									<Text>
										Sometimes our brains be filled with all sorts of invisible
										monsters. What might happen if we treated them with kindness
										and acceptance?
									</Text>
								</VStack>
							</VStack>
						</VStack>
					</Container>
				</Display>
			</VStack>
		</>
	)
}
