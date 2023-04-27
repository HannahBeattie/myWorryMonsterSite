import {
	Box,
	Card,
	Divider,
	GridItem,
	HStack,
	Heading,
	Image,
	SimpleGrid,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const size = {
	fontSize: { base: 'xs', md: 'lg' },
}

const images = [
	{
		image: '../assets/stills/8.png',
		alt: 'app still',
		description: (
			<VStack spacing={0} {...size}>
				<Text {...size}>My pet worry monster</Text>
				<Text {...size}>Displayed on Iphone 8</Text>
			</VStack>
		),
	},
	{
		image: '../assets/stills/82.png',
		alt: 'app still',
		description: (
			<VStack spacing={0} {...size}>
				<Text {...size}>My pet worry monster</Text>
				<Text {...size}>Displayed on Iphone 8</Text>
			</VStack>
		),
	},

	{
		image: '../assets/stills/85.png',
		alt: 'app still',
		description: (
			<VStack spacing={0} {...size}>
				<Text {...size}>My pet worry monster</Text>
				<Text>Displayed on Iphone 8 </Text>
			</VStack>
		),
	},
	{
		image: '../assets/stills/pro.png',
		alt: 'app still',
		description: (
			<VStack spacing={0} {...size}>
				<Text {...size}>My pet worry monster</Text>
				<Text {...size}>Displayed on Ipad pro 12&quot;</Text>
			</VStack>
		),
	},
	{
		image: '../assets/stills/pro2.png',
		alt: 'app still',
		description: (
			<VStack spacing={0} {...size}>
				<Text {...size}>My pet worry monster</Text>
				<Text {...size}>Displayed on Ipad pro 12&quot;</Text>
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
		<VStack
			maxW='800px'
			mx='auto'
			my={{ md: 10 }}
			px={{ base: 4 }}
			spacing={6}
			py={{ base: 2, md: 6 }}
		>
			<SimpleGrid
				as={motion.div}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				spacing={{ md: 6 }}
				columns={{ md: 2 }}
			>
				<Box flex={1} w={400} pr={{ md: 4 }} display={{ base: 'none', md: 'flex' }}>
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
					mx={4}
					p={4}
					flex={1}
					justifyContent={'center'}
					justifySelf={'center'}
					alignSelf={'center'}
				>
					<HStack
						w={{ base: 300 }}
						py={8}
						flex={1}
						spacing={10}
						justifyContent={'center'}
					>
						<Image
							maxH={100}
							shadow={'2xl'}
							alt={'logo'}
							src={'/logo.webp'}
							borderRadius={20}
						/>
						<VStack spacing={0} color={'gray.400'}>
							<Text fontSize={'xl'} fontFamily={'Open Sans'}>
								Screenshots
							</Text>
							<Text fontSize={'sm'} fontFamily={'Open Sans'} pb={{ md: 4 }}>
								IOS
							</Text>
							<Text fontSize={'sm'} fontFamily={'Open Sans'} pb={4}>
								© 2023 HannahBeattie
							</Text>
						</VStack>
					</HStack>
					<VStack
						color={'gray.300'}
						w={{ base: 300 }}
						fontFamily={'Open Sans'}
						py={{ md: 6 }}
						fontWeight={400}
						fontSize={'md'}
						spacing={2}
					>
						<Divider borderColor={'gray.600'} />
						{selectedImage.description}
						<Divider borderColor={'gray.600'} />
						<VStack spacing={0} pt={2} fontSize={{ base: 'xs', md: 'lg' }}>
							<Text>Version 0.2.0</Text>
							<Text>2023</Text>
							<Text>Requires iOS 13.0 or later.</Text>
						</VStack>
					</VStack>
				</VStack>
			</SimpleGrid>
			<Box flex={1} w={{ base: 400, sm: 'undefined' }} display={{ base: 'flex', md: 'none' }}>
				<Image
					shadow={'dark-lg'}
					borderRadius={'md'}
					alt={selectedImage.alt}
					src={selectedImage.image}
					maxH='400px'
					mx='auto'
				/>
			</Box>
			<HStack mt={4}>
				{images.map((image, index) => (
					<GridItem
						key={index}
						as={motion.div}
						whileHover={{ scale: 1.02 }}
						whileTap={{ opacity: 0.5 }}
					>
						<Image
							opacity={image === selectedImage ? 0.5 : 1}
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
