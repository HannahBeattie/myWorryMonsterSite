import '@/styles/globals.css'
import { theme } from '@/styles/theme'
import { ChakraProvider, VStack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import BgImage from '../../public/components/landing/BgImage'
import Header from '../../public/components/nav/Header'
export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>My Wory Monster</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<BgImage bg={4} />
			<AnimatePresence mode='wait' initial={false}>
				<VStack as='main' spacing='0' flex={'1'} alignItems='stretch' minH='100vh'>
					<Header />
					<Component {...pageProps} />
				</VStack>
			</AnimatePresence>
		</ChakraProvider>
	)
}
