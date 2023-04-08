import '@/styles/globals.css'
import { theme } from '@/styles/theme'

import { ChakraProvider, VStack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>My Wory Monster</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AnimatePresence mode='wait' initial={false}>
				<VStack as='main' spacing='0' flex={'1'} alignItems='stretch' minH='100vh'>
					<Component {...pageProps} />
				</VStack>
			</AnimatePresence>
		</ChakraProvider>
	)
}
