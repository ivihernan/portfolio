'use client'

import Atropos from 'atropos/react'
import 'atropos/css'

import Image from 'next/image'

export default function Work() {
	return (
		<>
			<section id="work" className="h-screen flex items-center justify-center">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
					{[
						{
							title: 'Modem 21',
							image: '/assets/game21.png',
							languajes: 'React, Tailwind CSS',
							description: 'One of the most typical casino games is BlackJack.',
						},
						{
							title: 'Tic Tac Toe',
							image: '/assets/gmail.png',
							languajes: 'Next.js, React',
							description: 'The best game when we were young, Tic-tac-toe.',
						},
						{
							title: 'Gym controller',
							image: '/assets/github.png',
							languajes: 'Java',
							description: 'A simple gym controller to manage one gym.',
						},
						{
							title: 'Sim Elections',
							image: '/assets/linkedin.png',
							languajes: 'C',
							description: 'If you want to simulate an elections and play with the results',
						},
					].map((project, index) => (
						<div className="flex flex-col shadow-xl rounded-2xl bg-white/5" key={index}>
							<Atropos key={index} className="w-full h-full rounded-2xl shadow-xl overflow-hidden flex flex-row justify-center items-center" activeOffset={40} shadowScale={1.05} shadow={false} highlight={false}>
								<div className="relative h-48 w-full rounded-2xl overflow-hidden">
									<Image src={project.image} alt={project.title} fill className="object-cover shadow-2xl" />
								</div>
							</Atropos>
							<div className="p-4 ">
								<h3 className="text-xl font-semibold mb-2 text-white/60">{project.title}</h3>
								<p className="text-white/40 text-sm">{project.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}
