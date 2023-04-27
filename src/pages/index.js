import {
	Accordion,
	Button,
	Center,
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
import ScrollToTop from '../../public/components/nav/ScrollToTop'
import AboutCreator from '../../public/components/landing/AboutCreator'
import Gallery from '../../public/components/Gallery'

export default function Home() {
	const sec1 = getItem('one')
	const sec3 = getItem('three')
	const sec4 = getItem('four')
	const sec5 = getItem('five')

	return (
		<>
			<Head>
				<title>My Worry Monster</title>
				<meta name='description' content='My Worry Monster app by Hannah Beattie' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/icons/favicon.png' />
			</Head>

			<VStack
				overflow={'hidden'}
				flex={1}
				as={'main'}
				align={{ base: 'center', md: 'stretch' }}
				justify={'center'}
				spacing={{ lg: 200, base: 50 }}
				pb={8}
				px={{ lg: '10vw', sm: 10 }}
			>
				<LndImg />
				<Feature
					bg={'transparent'}
					image={
						<MonsterImage
							im={7}
							props={{
								maxH: { base: 420, md: 600 },
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
								maxH: { base: 400, md: 600 },
								borderRadius: 20,
							}}
						/>
					}
				>
					{sec3}
				</Feature>

				<VStack spacing={{ base: 4, lg: 8 }}>
					{sec4}
					{sec5}
				</VStack>
				<VStack
					flex={1}
					alignItems={'stretch'}
					shadow={'dark-lg'}
					backgroundColor={'gray.800'}
					borderRadius={20}
				>
					<VStack>
						<Gallery />
					</VStack>
				</VStack>

				<VStack flex={1} alignItems={'stretch'}>
					<AboutCreator />
				</VStack>

				<ScrollToTop />
			</VStack>
		</>
	)
}
