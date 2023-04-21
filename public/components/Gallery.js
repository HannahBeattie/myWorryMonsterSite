import { Box, Card, GridItem, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const images = [
	{
		image: '../assets/stills/8.png',
		alt: 'app still',
		description: (
			<VStack>
				<Text fontSize={'2xl'}>My pet worry monster</Text>
				<Text fontSize={'2xl'}>Displayed on Iphone 8</Text>
			</VStack>
		),
	},
	{
		image: '../assets/stills/82.png',
		alt: 'app still',
		description: (
			<VStack>
				<Text fontSize={'2xl'}>My pet worry monster</Text>
				<Text fontSize={'2xl'}>Displayed on Iphone 8</Text>
			</VStack>
		),
	},
	{
		image: '../assets/stills/83.png',
		alt: 'app still',
		description: (
			<VStack>
				<Text fontSize={'2xl'}>My pet worry monster</Text>
				<Text fontSize={'2xl'}>Displayed on Iphone 8</Text>
			</VStack>
		),
	},
	{
		image: '../assets/stills/84.png',
		alt: 'app still',
		description: (
			<VStack>
				<Text fontSize={'2xl'}>My pet worry monster</Text>
				<Text fontSize={'2xl'}>Displayed on Iphone 8</Text>
			</VStack>
		),
	},
	{
		image: '../assets/stills/85.png',
		alt: 'app still',
		description: (
			<VStack>
				<Text fontSize={'2xl'}>My pet worry monster</Text>
				<Text fontSize={'2xl'}>Displayed on Iphone 8 </Text>
			</VStack>
		),
	},
	{
		image: '../assets/stills/pro.png',
		alt: 'app still',
		description: (
			<VStack>
				<Text fontSize={'2xl'}>My pet worry monster</Text>
				<Text fontSize={'2xl'}>Displayed on Ipad pro 12&quot;</Text>
			</VStack>
		),
	},
	{
		image: '../assets/stills/pro2.png',
		alt: 'app still',
		description: (
			<VStack>
				<Text fontSize={'2xl'}>My pet worry monster</Text>
				<Text fontSize={'2xl'}>Displayed on Ipad pro 12&quot;</Text>
			</VStack>
		),
	},
]

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState(images[0])

	const handleImageClick = (image) => {
		setSelectedImage(image)
	}

	return (
		<VStack maxW='800px' mx='auto' my={10} px={4} spacing={6} py={6}>
			<SimpleGrid
				as={motion.div}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				spacing={6}
				columns={{ md: 2 }}
			>
				<Box flex={1} w={400}>
					<Image
						shadow={'dark-lg'}
						borderRadius={'md'}
						alt={selectedImage.alt}
						src={selectedImage.image}
						maxH='500px'
						mx='auto'
					/>
				</Box>
				<VStack
					bg={'transparent'}
					mx={4}
					w={{ base: 300, sm: 400 }}
					p={4}
					flex={1}
					justifyContent={'center'}
					justifySelf={'center'}
					alignSelf={'center'}
				>
					{selectedImage.description}
				</VStack>
			</SimpleGrid>

			<HStack mt={4}>
				{images.map((image, index) => (
					<GridItem
						key={index}
						as={motion.div}
						whileHover={{ scale: 1.02 }}
						whileTap={{ opacity: 0.5 }}
					>
						<Image
							opacity={image === selectedImage ? 1 : 0.5}
							borderRadius={10}
							shadow={'lg'}
							alt={'image'}
							src={image.image}
							maxH={{ base: '70px', md: '100px' }}
							cursor='pointer'
							onClick={() => handleImageClick(image)}
						/>
					</GridItem>
				))}
			</HStack>
		</VStack>
	)
}

export default Gallery
