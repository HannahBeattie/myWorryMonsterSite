import { HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { getSec } from './content/worryAbout'
import About from './landing/About'
import StyledNextLink from './nav/StyledNextLink'

const SmoothScroll = () => {
	const scrollRef = useRef(null)
	const [scrollRange, setScrollRange] = useState(0)

	const updateScrollWidth = () => {
		scrollRef && setScrollRange(scrollRef.current.scrollWidth)
	}

	useLayoutEffect(() => {
		updateScrollWidth()
	}, [scrollRef])

	useEffect(() => {
		window.addEventListener('resize', updateScrollWidth)
		return () => window.removeEventListener('resize', updateScrollWidth)
	}, [])

	const { scrollYProgress } = useScroll()
	const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange])
	const one = getSec('first')
	const two = getSec('firstPR')
	const twoPointTwo = getSec('twoPointTwo')
	const twoPointThree = getSec('twoPointThree')
	const three = getSec('seccond')
	const thirdPointThree = getSec('thirdPointThree')
	const four = getSec('third')
	const five = getSec('forth')
	const six = getSec('fifth')
	const seven = getSec('sixth')
	const eight = getSec('seventh')
	const nine = getSec('eight')

	return (
		<>
			<motion.section
				ref={scrollRef}
				style={{
					x: transform,
					position: 'fixed',
					left: 0,
					right: 0,
					willChange: 'transform',
				}}
			>
				<HStack w={'max-content'} h={'100vh'} alignItems='center'>
					<About isRight={true} content={one.content} img={one.img} />
					<About isRight={true} content={two.content} img={two.img} />
					<About isRight={true} content={three.content} img={three.img} />
					<About isRight={true} content={twoPointTwo.content} img={twoPointTwo.img} />
					<About isRight={true} content={twoPointThree.content} img={twoPointThree.img} />
					<About
						isRight={true}
						content={thirdPointThree.content}
						img={thirdPointThree.img}
					/>
					<About isRight={true} content={four.content} img={four.img} />
					<About isRight={true} content={five.content} img={five.img} />
					<About isRight={true} content={six.content} img={six.img} />
					<About isRight={true} content={seven.content} img={seven.img} />
					<About isRight={true} content={eight.content} img={eight.img} />
					<About isRight={true} content={nine.content} img={nine.img} />
				</HStack>
			</motion.section>
			<VStack style={{ height: scrollRange }} className='ghost' />
			{scrollRange > 0 && (
				<VStack flex={1} maxH={'100vh'} py={100}>
					<Image maxH={'60vh'} src={'/assets/mnstr/tg.png'} alt={'feet'} mb={-10} />
					<Text color={'gray.500'} fontSize={{ lg: 'xl' }}>
						SPECIAL THANKS TO: MIKEY LEMMON
					</Text>
					<StyledNextLink href={'/'}>
						<HStack>
							<Image
								maxH={{ base: 6 }}
								src={'/assets/navcons/home.png'}
								alt={'feet'}
							/>
							<VStack>
								<Spacer />
								<Text>Home</Text>
							</VStack>
						</HStack>
					</StyledNextLink>
				</VStack>
			)}
		</>
	)
}

export default SmoothScroll
