'use client'

import {useState} from 'react'
import Image from 'next/image'

import {useScrollSpy} from '@/hooks/useScrollSpy'

export default function Navbar() {
	const items = ['Home', 'Work', 'About', 'Contact']

	const [mobileOpen, setMobileOpen] = useState(false)
	const [activeItem, setActiveItem] = useState('Home')

	useScrollSpy(
		items.map(item => item.toLowerCase()),
		setActiveItem
	)

	const toggleMobileMenu = () => setMobileOpen(!mobileOpen)

	return (
		<div className="flex w-screen items-center px-8 py-4 fixed top-0 z-100 backdrop-blur-lg max-md:flex-col">
			<nav className="relative mx-auto rounded-2xl bg-white/5 p-4 flex flex-row justify-between items-center w-full max-w-6xl">
				<div className="flex flex-row justify-center items-center gap-2 text-xs text-white/20">
					<Image src="/assets/logo_RRSS.png" alt="logo" width={50} height={50} className="rounded-4xl" />
					<p className="max-sm:hidden">Ivan Hernandez Pollino</p>
				</div>

				{/* Map del array de items que tenemos */}
				<div className="max-md:hidden">
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

				{/* Los iconos de las redes sociales y correo */}
				<div className="flex flex-row gap-2.5 max-md:gap-5 max-sm:gap-3 justify-center items-center max-sm:mr-4">
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

				{/* Menu cuando estemos en movil */}
				<button className="md:hidden text-white/80 text-2xl" onClick={() => setMobileOpen(prev => !prev)} aria-label="Toggle Menu">
					{mobileOpen ? '×' : '≡'}
				</button>
			</nav>
			{/* El desplegable del menu del movil */}
			{mobileOpen && (
				<div className="md:hidden bg-white/10 backdrop-blur-md w-full px-8 py-4 rounded-2xl z-50">
					<ul className="flex flex-col gap-2">
						{items.map(item => (
							<li key={item}>
								<a
									href={`#${item.toLowerCase()}`}
									onClick={() => {
										setActiveItem(item)
										setMobileOpen(false)
									}}
									className={`block px-4 py-2 rounded-xl text-sm transition ${activeItem === item ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}
								>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
