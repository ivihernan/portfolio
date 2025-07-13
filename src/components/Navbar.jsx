'use client'

import {useState} from 'react'
import Image from 'next/image'

import {useScrollSpy} from '@/hooks/useScrollSpy'

export default function Navbar() {
	const items = ['Home', 'Work', 'About', 'Contact']

	const [isActive, setIsActive] = useState(false)
	const [activeItem, setActiveItem] = useState('Home')

	useScrollSpy(
		items.map(item => item.toLowerCase()),
		setActiveItem
	)

	return (
		<div className="flex w-screen items-center px-8 py-4 fixed top-0 z-100 backdrop-blur-lg">
			<nav className="relative mx-auto rounded-2xl bg-white/5 p-4 flex flex-row justify-between items-center w-full max-w-6xl">
				<div className="flex flex-row justify-center items-center gap-2 text-xs text-white/20">
					<Image src="/assets/logo_RRSS.png" alt="logo" width={50} height={50} className="rounded-4xl" />
					<p className="">Ivan Hernandez Pollino</p>
				</div>
				<div>
					<ul className="relative flex items-center gap-3">
						{items.map((item, index) => (
							<li key={index}>
								<a
									onClick={() => {
										setIsActive(!isActive)
										setActiveItem(item)
									}}
									href={`#${item.toLowerCase()}`}
									className={`inline-block px-4 text-sm py-3 rounded-xl transition-all duration-300 ${activeItem === item ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white py-1'}`}
								>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-row gap-2.5 justify-center items-center">
					<button className="cursor-pointer">
						<a href="https://www.instagram.com/iviihernan/?hl=es" target="_blank" rel="noopener noreferrer">
							<Image src="/assets/instagram.png" width={25} height={25} alt="Instagram" />
						</a>
					</button>
					<button className="cursor-pointer">
						<a href="https://github.com/ivihernan" target="_blank" rel="noopener noreferrer">
							<Image src="/assets/github.png" width={25} height={25} alt="GitHub" />
						</a>
					</button>
					<button className="cursor-pointer">
						<a href="https://www.linkedin.com/in/iv%C3%A1n-hern%C3%A1ndez-b7ab54246/" target="_blank" rel="noopener noreferrer">
							<Image src="/assets/linkedin.png" width={25} height={25} alt="LinkedIn" />
						</a>
					</button>
					<button className="cursor-pointer">
						<a href="mailto:iviherpol11@gmail.com">
							<Image src="/assets/gmail.png" width={25} height={25} alt="Gmail" />
						</a>
					</button>
				</div>
			</nav>
		</div>
	)
}
