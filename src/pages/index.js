import {
	Accordion,
	Button,
	Container,
	HStack,
	Heading,
	Image,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { getItem } from '../../public/components/content/landingContent'
import Feature from '../../public/components/landing/Feature'
import LndImg from '../../public/components/landing/LndImg'
import MonsterImage from '../../public/components/landing/MonsterImage'
import StyledNextLink from '../../public/components/nav/StyledNextLink'
import { useEffect } from 'react'

export default function Home() {
	const sec1 = getItem('one')

	const sec3 = getItem('three')
	const sec4 = getItem('four')
	const sec5 = getItem('five')
	const sec6 = getItem('six')

	return (
		<>
			<Head>
				<title>My Worry Monster</title>
				<meta name='description' content='My Worry Monster app by Hannah Beattie' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/icons/favicon.png' />
			</Head>

			<VStack
				flex={1}
				alignItems={'stretch'}
				as={'main'}
				spacing={4}
				pt={4}
				maxW={'100vw'}
				overflow={'hidden'}
			>
				<LndImg />
				<Feature
					bg={'transparent'}
					image={
						<MonsterImage
							im={7}
							props={{
								mt: 0,
								maxH: 600,
								borderRadius: 20,
							}}
						/>
					}
				>
					{sec1}
				</Feature>

				<Feature
					right={true}
					bg={'transparent'}
					image={
						<MonsterImage
							im={12}
							props={{
								mt: 0,
								flex: 1,
								maxH: 600,
								borderRadius: 20,
							}}
						/>
					}
				>
					{sec3}
				</Feature>

				{sec4}

				{sec5}

				<VStack px={100} py={8} alignItems={'stretch'}>
					{sec6}
				</VStack>
				<VStack py={10}>
					<HStack>
						<Image maxH={300} src={'/assets/mnstr/9.png'} alt={'doodle'} />
					</HStack>
					<Button
						bg={'gray.900'}
						_hover={{ bg: 'teal.900' }}
						shadow={'dark-lg'}
						borderRadius={200}
						onClick={() => {
							window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
						}}
					>
						<Text textAlign={'center'}>Scroll to top</Text>
					</Button>
				</VStack>
			</VStack>
		</>
	)
}
