import { VStack } from '@chakra-ui/react'
import Head from 'next/head'
import LndImg from '../../public/components/landing/LndImg'
import MonsterImage from '../../public/components/landing/MonsterImage'
import { getItem } from '../../public/components/content/landingContent'
import Feature from '../../public/components/landing/Feature'
import Logo from '../../public/components/nav/Logo'

export default function Home() {
	const sec1 = getItem('one')
	const sec2 = getItem('two')
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
				py={4}
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
					bg={'transparent'}
					image={
						<MonsterImage
							im={10}
							props={{
								mt: 0,
								maxH: 600,
								borderRadius: 20,
								shadow: true,
							}}
						/>
					}
				>
					{sec3}
				</Feature>
				<Feature
					right={true}
					bg={'transparent'}
					image={
						<MonsterImage
							im={1}
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
					{sec4}
				</Feature>
			</VStack>
		</>
	)
}
