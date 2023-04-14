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
				maxW={'100vw'}
				overflow={'hidden'}
				spacing={{ lg: 200, base: 100 }}
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

				<VStack spacing={10}>
					{sec4}
					{sec5}
				</VStack>
				<VStack alignItems={'stretch'}>
					<VStack px={'10vw'} display={{ base: 'none', md: 'flex' }}>
						<Image maxH={300} maxW={300} src={'/assets/mnstr/9.png'} alt={'doodle'} />
					</VStack>
					<Feature
						right={true}
						bg={'transparent'}
						image={
							<Center>
								<Image maxH={400} src={'/assets/mnstr/tg.png'} alt={'doodle'} />
							</Center>
						}
					>
						<VStack>{sec6}</VStack>
						<VStack
							alignItems={'stretch'}
							px={'10vw'}
							display={{ base: 'flex', md: 'none' }}
						>
							<Image
								maxH={300}
								maxW={300}
								src={'/assets/mnstr/9.png'}
								alt={'doodle'}
							/>
						</VStack>

						<HStack px={8} pb={{ lg: '30vh' }}>
							<Button
								bg={'transparent'}
								right={0}
								left={0}
								borderRadius={200}
								shadow={'inner'}
								_hover={{ bg: 'transparent' }}
								onClick={() => {
									window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
								}}
							>
								<Text
									color={'pink.300'}
									textAlign={'center'}
									fontSize={'2xl'}
									pt={4}
								>
									Back to top
								</Text>
							</Button>
							<Spacer />
						</HStack>
					</Feature>
				</VStack>
			</VStack>
		</>
	)
}
