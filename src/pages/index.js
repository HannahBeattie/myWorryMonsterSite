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
				as={'main'}
				align={{ base: 'center', md: 'stretch' }}
				justify={'center'}
				spacing={{ lg: 200, base: 50 }}
				py={6}
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

				<VStack>
					{sec4}
					{sec5}
				</VStack>
				<AboutCreator />
				<ScrollToTop />
			</VStack>
		</>
	)
}
