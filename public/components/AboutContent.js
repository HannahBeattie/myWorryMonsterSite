import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import { motion, spring, useScroll, useSpring, useTransform } from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { getSec } from './content/worryAbout'
import About from './landing/About'
import { aboutContent } from './content/aboutContent'

const AboutContent = () => {
	const scrollRef = useRef(null)
	const ghostRef = useRef(null)
	const [scrollRange, setScrollRange] = useState(0)
	const [viewportW, setViewportW] = useState(0)
	const items = aboutContent

	useLayoutEffect(() => {
		scrollRef && setScrollRange(scrollRef.current.scrollWidth)
	}, [scrollRef])

	const onResize = useCallback((entries) => {
		for (let entry of entries) {
			setViewportW(entry.contentRect.width)
		}
	}, [])

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
					{items.map((item, idx) => (
						<VStack key={idx}>
							<About isRight={true} content={item.content} img={item.img} />
						</VStack>
					))}
				</HStack>
			</motion.section>
			<VStack ref={ghostRef} style={{ height: scrollRange }} className='ghost' />
			<VStack flex={1} maxH={'90vh'}>
				<Image maxH={'60vh'} src={'/assets/mnstr/tg.png'} alt={'feet'} />
				<Text>SPECIAL THANKS TO: MIKEY LEMMON</Text>
			</VStack>
		</>
	)
}

export default AboutContent
