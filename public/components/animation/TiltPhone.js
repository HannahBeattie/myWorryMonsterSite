import { motion } from 'framer-motion'

export default function TiltPhone({ children, transition, yIs, rotate, yIsNow, dir }) {
	return (
		<motion.div
			animate={{ x: 0, rotate: rotate ? rotate : 0, y: yIs ? yIs : 0 }}
			whileHover={{
				y: yIsNow ? yIsNow : -5,
				x: 0,
				rotate: dir ? -5 : 5,
				ease: 'easeInOut',
				cursor: 'pointer',
			}}
			transition={{ ease: 'easeInOut', ...transition }}
		>
			{children}
		</motion.div>
	)
}
