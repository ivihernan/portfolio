'use client'

import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'

// const Magnetic =const  ({children}) => {
// 	return (
// 		<span className="inline-block text-fill">
// 			{[...children].map((char, index) => (
// 				<motion.span key={index} whileHover={{scale: 1.5, color: '#ec4899', textShadow: '0px 0px 4px #ec4899'}} transition={{type: 'spring', stiffness: 300, damping: 15}} className="inline-block">
// 					{char}
// 				</motion.span>
// 			))}
// 		</span>
// 	)
// }

//Cada vez que paso por cada letra se anima gracias a framer-motion
//Con un map del texto vamos iterando letra a letra para poder hacer el efecto
const Magnetic = ({children}) => {
	const [isHovering, setIsHovering] = useState(false)
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)
	const ref = useRef(null)

	const smoothX = useSpring(mouseX, {stiffness: 300, damping: 30})
	const smoothY = useSpring(mouseY, {stiffness: 300, damping: 30})

	const x = useTransform(smoothX, value => value - 20)
	const y = useTransform(smoothY, value => value - 20)

	const handleMouseMove = event => {
		const bounds = ref.current?.getBoundingClientRect()
		if (!bounds) return
		mouseX.set(event.clientX - bounds.left)
		mouseY.set(event.clientY - bounds.top)
	}
	return (
		<span ref={ref} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="relative inline-block text-fill">
			{isHovering && (
				<motion.div
					className="absolute top-0 left-0 z-[-1] h-10 w-10 rounded-full bg-transparent border-2 border-[#E8F9FF] pointer-events-none "
					style={{
						x,
						y,
					}}
				/>
			)}

			{[...children].map((char, index) => (
				<motion.span
					key={index}
					whileHover={{
						scale: 1.5,
						color: '#E8F9FF',
						textShadow: '0px 0px 4px #E8F9FF',
					}}
					transition={{type: 'spring', stiffness: 300, damping: 15}}
					className="inline-block relative z-10"
				>
					{char}
				</motion.span>
			))}
		</span>
	)
}

export default function HomePage() {
	return (
		<>
			<section id="home">
				<div className="mx-auto flex flex-col h-screen w-screen items-center justify-center">
					<div className="w-full h-full flex flex-col justify-center items-center gap-4 cursor-default">
						<div className="w-full max-w-2xl text-center font-bebas text-4xl md:text-6xl text-outline">
							Hey, I'm <Magnetic children="Ivan" /> <Magnetic children="Hernandez" />
						</div>
						<div className="w-full max-w-2xl text-center text-4xl font-bebas md:text-6xl text-outline ">
							But you can call me <Magnetic children="Ivan" />
						</div>
						<div className="font-bebas text-white/60 gap-2 text-start mt-2 text-xl max-sm:text-lg max-md:px-8">
							<p>I am 19 years old, I am studying telecommunications engineering, </p>
							<p>but I learned to program webs by myself.</p>
						</div>
					</div>
					<a href="#work">
						<motion.div
							className="cursor-pointer mb-4 "
							animate={{y: [0, -10, 0]}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: 'loop',
								ease: 'easeInOut',
							}}
						>
							<Image src="/assets/arrow_down.svg" alt="Arrow Down" width={40} height={40} className="fill-current invert" />
						</motion.div>
					</a>
				</div>
			</section>
		</>
	)
}
