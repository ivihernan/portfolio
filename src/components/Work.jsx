'use client'

import Atropos from 'atropos/react'
import 'atropos/css'

import {motion} from 'framer-motion'

import Image from 'next/image'

export default function Work() {
	const projects = [
		{
			title: 'Modem 21',
			image: '/assets/logo1.png',
			languajes: 'React, Tailwind CSS',
		},
		{
			title: 'Tic Tac Toe',
			image: '/assets/xo-mux.png',
			languajes: 'Next.js, React',
		},
		{
			title: 'Telefit',
			image: '/assets/telefit.png',
			languajes: 'Java',
			downloadUrl: '/zip/ControladorGym.zip',
		},
		{
			title: 'Democracia',
			image: '/assets/democracia.png',
			languajes: 'C',
			downloadUrl: '/zip/SimElecciones.zip',
		},
	]
	return (
		<>
			<section id="work">
				<div className="mx-auto h-screen w-screen flex flex-col items-center justify-center font-sans">
					<div className="h-full w-full flex flex-col justify-end items-center gap-4 cursor-default mb-10">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full ">
							{projects.map((project, index) => {
								return (
									<div key={index} className="bg-white/5 backdrop-blur-sm text-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform hover:-translate-1 duration-300 flex flex-col ">
										<img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
										<div className="p-4 flex flex-col gap-2">
											<h3 className="text-lg font-semibold ">{project.title}</h3>
											<p className="text-sm text-white/60 italic">{project.languajes}</p>
											{project.downloadUrl === undefined ? (
												<a href="https://example.com" className="inline-block text-sm text-[#10b981] hover:underline">
													Visit Web
												</a>
											) : (
												<a href={project.downloadUrl} download className=" inline-block text-sm text-[#10b981] hover:underline ">
													Download
												</a>
											)}
										</div>
									</div>
								)
							})}
						</div>
					</div>
					<a href="#about">
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
