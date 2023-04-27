import { Button, Image, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { items } from './Header'
import StyledNextLink from './StyledNextLink'

export default function HorizontalHide() {
	const navItems = items
	const { getButtonProps, getDisclosureProps, isOpen, onClose } = useDisclosure()
	const [hidden, setHidden] = useState(!isOpen)

	const handleClick = () => {
		onClose()
	}
	const [rotate, setRotate] = useState(0)

	return (
		<VStack flex={1} alignItems={'stretch'} display={{ lg: 'none' }} spacing={0}>
			<Button
				{...getButtonProps()}
				bg={'transparent'}
				position={'fixed'}
				top={{ base: 2, md: 4 }}
				right={6}
				borderRadius={200}
				_hover={{ bg: 'transparent' }}
			>
				<Image h={{ base: 8, md: 10 }} src={'/assets/navcons/add.png'} alt={'add icon'} />{' '}
			</Button>

			<motion.div
				{...getDisclosureProps()}
				hidden={hidden}
				initial={false}
				onAnimationStart={() => setHidden(false)}
				onAnimationComplete={() => setHidden(!isOpen)}
				animate={{ width: isOpen ? '100vw' : 0 }}
				style={{
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					position: 'absolute',
					right: '0',
					zIndex: 2,
					height: '100vh',
					top: '0',
				}}
			>
				<VStack
					flex={1}
					backgroundImage={'/assets/bg/2.png'}
					h={'100vh'}
					w={'100vw'}
					position={'fixed'}
				>
					<Button
						position={'absolute'}
						left={2}
						top={2}
						variant={'unstyled'}
						onClick={handleClick}
					>
						<motion.div whileInView={{ rotate: 50 }}>
							<Image h={8} src={'/assets/navcons/add.png'} alt={'add icon'} />
						</motion.div>
					</Button>
					<VStack spacing={4} pt={100}>
						<StyledNextLink href={'/'} onClick={handleClick}>
							<Text fontSize={'2xl'}>home</Text>
						</StyledNextLink>
						{navItems.map(({ href, page, icon }, idx) => (
							<Button key={`item-key${idx}`} variant={'unstyled'} flex={1}>
								<StyledNextLink href={href} onClick={handleClick}>
									<Text fontSize={'2xl'}>{page}</Text>
								</StyledNextLink>
							</Button>
						))}
					</VStack>
				</VStack>
			</motion.div>
		</VStack>
	)
}
