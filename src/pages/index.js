import { VStack } from '@chakra-ui/react'
import Head from 'next/head'
import LndImg from '../../public/components/landing/LndImg'
import MonsterImage from '../../public/components/landing/MonsterImage'
import { getItem } from '../../public/components/content/landingContent'
import Feature from '../../public/components/landing/Feature'
import Logo from '../../public/components/nav/Logo'
import HorizontalHide from '../../public/components/nav/HorizontalHide'
import ContentTabs from '../../public/components/landing/ContentTabs'
import Creator from '../../public/components/landing/Creator'

export default function Home() {
	const sec1 = getItem('one')

	const sec3 = getItem('three')
	const sec4 = getItem('four')
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
			</VStack>
		</>
	)
}
