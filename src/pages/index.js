import { VStack } from '@chakra-ui/react'
import Head from 'next/head'
import LndImg from '../../public/components/LndImg'
import MonsterImage from '../../public/components/MonsterImage'
import { getItem } from '../../public/components/content/landingContent'
import Feature from '../../public/components/landing/Feature'

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

			<VStack flex={1} alignItems={'stretch'} as={'main'} spacing={4} py={4} pb={'5vh'}>
				<LndImg />

				<Feature
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
					{sec1}
				</Feature>

				<Feature
					right={true}
					bg={'transparent'}
					image={
						<MonsterImage
							mood={'ph2'}
							props={{
								borderRadius: 20,
								shadow: false,
								className: 'shadow',
							}}
						/>
					}
				>
					{sec2}
				</Feature>
				<Feature
					bg={'transparent'}
					image={
						<MonsterImage
							mood={'curious'}
							props={{
								mt: 0,
								maxH: 600,
								borderRadius: 20,
							}}
						/>
					}
				>
					{sec3}
				</Feature>
				<Feature
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
					{sec4}
				</Feature>
			</VStack>
		</>
	)
}
