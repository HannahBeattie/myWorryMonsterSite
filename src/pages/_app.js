import '@/styles/globals.css'
import { theme } from '@/styles/theme'
import { ChakraProvider, VStack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import BgImage from '../../public/components/landing/BgImage'
import Header from '../../public/components/nav/Header'
import Logo from '../../public/components/nav/Logo'
export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>My Wory Monster</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AnimatePresence mode='wait' initial={false}>
				<VStack
					padding={0}
					as='main'
					spacing='0'
					flex={'1'}
					alignItems='stretch'
					minH='100vh'
					width={'100vw'}
					backgroundSize={'cover'}
					backgroundImage={'/assets/bg/bg1.jpg'}
				>
					<Logo />
					<Component {...pageProps} />
					<Header />
				</VStack>
			</AnimatePresence>
		</ChakraProvider>
	)
}
