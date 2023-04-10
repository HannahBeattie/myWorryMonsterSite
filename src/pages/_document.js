import { theme } from '@/styles/theme'
import { ColorModeScript, VStack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { Head, Html, Main, NextScript } from 'next/document'

// Override default Next document to enforce overflowX=hidden on body element
// See: https://nextjs.org/docs/advanced-features/custom-document
export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='shortcut icon' href='/icons/favicon.png' />
			</Head>

			<AnimatePresence>
				<VStack
					flex={'1'}
					alignItems={'stretch'}
					as='body'
					minW='100vw'
					maxW={'100vw'}
					spacing='0'
					p={'0'}
					overflowX={'hidden'}
				>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</VStack>
			</AnimatePresence>
		</Html>
	)
}
