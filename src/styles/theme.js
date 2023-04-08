import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	fonts: {
		heading: 'Gaegu',
		body: 'Gaegu',
	},

	components: {
		Text: { fontWeight: '600' },
		Heading: {
			baseStyle: (props) => ({
				fontFamily: 'heading',
				fontWeight: '900',
			}),
			variants: {
				invert: {
					color: 'gray.300',

					_dark: {
						color: 'black',
					},
				},
			},
		},
	},
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},

	styles: {
		global: {
			body: {
				bg: '#F3F3F3',
				_dark: {
					bg: { md: '#02080c', base: '#02080c' },
				},
				// bg: '#0c8',
				// Make mobile tap highlight light-gray instead of blue-ish
				WebkitTapHighlightColor: 'rgba(128,128,128,0.2)', // '-webkit-tap-highlight-color'
			},
			// styles for the `a`
		},
	},
})
