import { Button, Heading, VStack, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { items } from './Header'

export default function HorizontalHide() {
	const navItems = items
	const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure()
	const [hidden, setHidden] = useState(!isOpen)

	return (
		// {navItems.map(({ href, page, icon }, idx) => ()}
		<VStack flex={1} alignItems={'stretch'} display={{ lg: 'none' }} spacing={0}>
			<Button {...getButtonProps()} position={'absolute'} top={0}>
				Toggle
			</Button>
			<motion.div
				{...getDisclosureProps()}
				hidden={hidden}
				initial={false}
				onAnimationStart={() => setHidden(false)}
				onAnimationComplete={() => setHidden(!isOpen)}
				animate={{ width: isOpen ? '100vw' : 0 }}
				style={{
					background: '#000',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					position: 'absolute',
					right: '0',

					zIndex: 2,
					height: '100vh',
					top: '0',
				}}
			>
				<VStack flex={1}>
					<Heading>welcome home</Heading>
					<Button {...getButtonProps()}>Close</Button>
				</VStack>
			</motion.div>
		</VStack>
	)
}
