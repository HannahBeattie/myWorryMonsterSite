import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useSpring } from 'framer-motion'
function JumpIn({ children }) {
	return (
		<AnimatePresence>
			<motion.div animate={{ y: [-2000, 0] }} transition={{ duration: 4, delay: 5 }}>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export default JumpIn
