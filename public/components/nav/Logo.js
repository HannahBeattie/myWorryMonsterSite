import { HStack, IconButton, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import StyledNextLink from './StyledNextLink'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
const scale = 14

function Logo() {
	const router = useRouter()
	const currentRoute = router.pathname
	const isCurrent = '/' === currentRoute
	return (
		<StyledNextLink href={'/'}>
			<VStack
				position={'fixed'}
				top={8}
				left={4}
				spacing={4}
				opacity={isCurrent ? '100%' : '90%'}
			>
				<motion.div whileTap={{ rotate: 10 }}>
					<IconButton
						_hover={{ bg: 'transparent' }}
						bg={'transparent'}
						icon={
							<Image
								_hover={{ bg: 'whiteAlpha.200' }}
								borderRadius={'20'}
								h={scale}
								w={scale}
								alt={'monster logo'}
								src={'/icons/favicon.png'}
								backgroundColor={isCurrent ? 'whiteAlpha.100' : 'gray.900'}
							/>
						}
					></IconButton>
					{isCurrent && (
						<VStack pt={2}>
							<Text opacity={'70%'} fontSize={'2xl'}>
								W.M
							</Text>
						</VStack>
					)}

					{!isCurrent && (
						<VStack pt={2}>
							<Image
								borderRadius={'20'}
								h={8}
								w={8}
								alt={'back'}
								src={'assets/navcons/bk.png'}
							/>
						</VStack>
					)}
				</motion.div>
			</VStack>
		</StyledNextLink>
	)
}

export default Logo
