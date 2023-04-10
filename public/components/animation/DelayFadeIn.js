import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function DelayFadeIn({ children, delay }) {
	const delayMe = delay ? delay : 4
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 0.5, 1] }}
				transition={{ delay: delayMe, duration: 6, ease: 'easeInOut' }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export default DelayFadeIn
