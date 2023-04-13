import { Center, HStack, VStack } from '@chakra-ui/react'
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

	const first = getSec('first')
	const sec = getSec('seccond')
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
				<HStack p={{ lg: 100 }} w={'max-content'} alignItems={'center'} minH={'100vh'}>
					<VStack>
						<About isRight={true} content={first.content} img={first.img} />
					</VStack>
					<VStack>
						<About isRight={true} content={sec.content} img={sec.img} />
					</VStack>
				</HStack>
			</motion.section>
			<VStack ref={ghostRef} style={{ height: scrollRange }} className='ghost' />
		</>
	)
}

export default SmoothScroll
