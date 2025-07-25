'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'

export default function About({modeDark}) {
	return (
		<>
			<section id="about">
				<div className="mx-auto flex flex-col h-screen w-screen items-center justify-center font-mono py-8 ">
					<div className="w-full h-full flex flex-row justify-center items-center cursor-default">
						<div className="w-2/3 h-full flex flex-col items-center justify-center max-sm:px-4">
							<p className={`text-start w-1/2 text-4xl max-sm:w-full max:sm:text-2xl ${modeDark === 'Dark' ? 'text-white/80' : 'text-black/50'}`}>About</p>
							<div className={`w-1/2  h-0.5 rounded-2xl max-sm:w-full ${modeDark === 'Dark' ? 'bg-white/80' : 'bg-black/50'}`}></div>
							<div className={`w-1/2 flex flex-col gap-5 mt-6 max-sm:w-full max-sm:gap-2 max-sm:text-sm ${modeDark === 'Dark' ? 'text-white/80' : 'text-black/50'}`}>
								<p>Hello, my name is Ivan Hernandez and I have always been passionate about learning new things and facing new challenges without knowing if they will be successful.</p>
								<p> I started programming at the age of 16 thanks to my passion for video games and from there I continued studying in a self-taught way.</p>
								<p>Right now I am studying telecommunications engineering at the UVA but I continue studying programming as it is a hobby for me.</p>
								<button className="mt-4">
									<a href="/assets/CV.pdf" download className="border border-[#10b981] rounded-xl px-3 py-2 inline-block text-sm text-[#10b981] hover:text-white/90 hover:bg-[#10b981] transition-colors duration-300 ">
										Descargar CV
									</a>
								</button>
							</div>
						</div>
						<div className="h-full flex items-center justify-center px-8">
							<Image src="/assets/me.png" alt="me" width={300} height={300} className="rounded-2xl overflow-hidden" />
						</div>
					</div>
					<a href="#contact">
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
							<Image src="/assets/arrow_down.svg" alt="Arrow Down" width={40} height={40} className={`fill-current ${modeDark === 'Dark' ? 'invert' : ''}`} />
						</motion.div>
					</a>
				</div>
			</section>
		</>
	)
}
