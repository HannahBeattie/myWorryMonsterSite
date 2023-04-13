import { Center, HStack, Image, VStack } from '@chakra-ui/react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'

import About from './landing/About'
import { getSec, sections } from './content/worryAbout'

const SmoothScroll = () => {
	const scrollRef = useRef(null)
	const ghostRef = useRef(null)
	const [scrollRange, setScrollRange] = useState(0)
	const [viewportW, setViewportW] = useState(0)

	useLayoutEffect(() => {
		scrollRef && setScrollRange(scrollRef.current.scrollWidth)
	}, [scrollRef])

	const onResize = useCallback((entries) => {
		for (let entry of entries) {
			setViewportW(entry.contentRect.width)
		}
	}, [])

	const { scrollYProgress } = useScroll()
	const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + viewportW])
	const physics = { damping: 15, mass: 0.27, stiffness: 55 }
	const spring = useSpring(transform, physics)

	const one = getSec('first')
	const two = getSec('firstPR')
	const three = getSec('seccond')
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
					x: spring,
					position: 'fixed',
					left: 0,
					right: 0,
					willChange: 'transform',
				}}
			>
				<HStack w={'max-content'} h={'100vh'}>
					<VStack>
						<About isRight={true} content={one.content} img={one.img} />
					</VStack>
					<VStack>
						<About isRight={true} content={two.content} img={two.img} />
					</VStack>
					<VStack>
						<About isRight={true} content={three.content} img={three.img} />
					</VStack>
					<VStack>
						<About isRight={true} content={four.content} img={four.img} />
					</VStack>
					<VStack>
						<About isRight={true} content={five.content} img={five.img} />
					</VStack>
					<VStack>
						<About isRight={true} content={six.content} img={six.img} />
					</VStack>
					<VStack>
						<About isRight={true} content={seven.content} img={seven.img} />
					</VStack>
					<VStack>
						<About isRight={true} content={eight.content} img={eight.img} />
					</VStack>
					<VStack>
						<About isRight={true} content={nine.content} img={nine.img} />
					</VStack>
				</HStack>
			</motion.section>
			<VStack ref={ghostRef} style={{ height: scrollRange }} className='ghost' />
			<VStack flex={1} maxH={'100vh'}>
				<Image maxH={'90vh'} src={'/assets/mnstr/tg.png'} alt={'feet'} />
			</VStack>
		</>
	)
}

export default SmoothScroll
