'use client'

import {useState} from 'react'
import Image from 'next/image'

import {useScrollSpy} from '@/hooks/useScrollSpy'

export default function Navbar({modeDark, setModeDark}) {
	const items = ['Home', 'Work', 'About', 'Contact']

	const [mobileOpen, setMobileOpen] = useState(false)
	const [activeItem, setActiveItem] = useState('Home')

	useScrollSpy(
		items.map(item => item.toLowerCase()),
		setActiveItem
	)

	const toggleMode = () => {
		setModeDark(prev => (prev === 'Dark' ? 'Light' : 'Dark'))
	}

	return (
		<div className="flex w-screen items-center px-8 py-4 fixed top-0 z-100 backdrop-blur-lg max-md:flex-col font-mono">
			<nav className={`relative mx-auto rounded-2xl  p-4 flex flex-row justify-between items-center w-full max-w-6xl ${modeDark === 'Dark' ? 'bg-white/5' : 'bg-gray-100/50'}`}>
				<div className={`flex flex-row justify-center items-center gap-2 text-xs ${modeDark === 'Dark' ? 'text-white/20' : 'text-black/50'}`}>
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
										setMobileOpen(!mobileOpen)
										setActiveItem(item)
									}}
									href={`#${item.toLowerCase()}`}
									className={`inline-block px-4 text-sm py-3 rounded-xl transition-all duration-300 ${activeItem === item ? (modeDark === 'Dark' ? 'bg-white/20 text-white' : 'bg-black/10 text-black/80') : modeDark === 'Light' ? 'text-black/50 hover:text-black/80' : 'text-white/60 hover:text-white'}`}
								>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Los iconos de las redes sociales y correo */}
				<div className="flex flex-row gap-2.5 max-md:gap-5 max-sm:gap-3 justify-center items-center max-sm:mr-4">
					<button className={`cursor-pointer hover:scale-110 transition-transform duration-300 ${modeDark === 'Dark' ? 'invert' : ''}`}>
						<a href="https://www.instagram.com/iviihernan/?hl=es" target="_blank" rel="noopener noreferrer">
							<Image src="/assets/instagram.png" width={25} height={25} alt="Instagram" />
						</a>
					</button>
					<button className={`cursor-pointer hover:scale-110 transition-transform duration-300 ${modeDark === 'Dark' ? 'invert' : ''}`}>
						<a href="https://github.com/ivihernan" target="_blank" rel="noopener noreferrer">
							<Image src="/assets/github.png" width={25} height={25} alt="GitHub" />
						</a>
					</button>
					<button className={`cursor-pointer hover:scale-110 transition-transform duration-300 ${modeDark === 'Dark' ? 'invert' : ''}`}>
						<a href="https://www.linkedin.com/in/iv%C3%A1n-hern%C3%A1ndez-b7ab54246/" target="_blank" rel="noopener noreferrer">
							<Image src="/assets/linkedin.png" width={25} height={25} alt="LinkedIn" />
						</a>
					</button>
					<button className={`cursor-pointer hover:scale-110 transition-transform duration-300 ${modeDark === 'Dark' ? 'invert' : ''}`}>
						<a href="mailto:iviherpol11@gmail.com">
							<Image src="/assets/gmail.png" width={25} height={25} alt="Gmail" />
						</a>
					</button>
					<button onClick={toggleMode} aria-label="Toggle Mode" className="cursor-pointer text-white/80 hover:text-white hover:scale-110 transition-all duration-300">
						{modeDark === 'Dark' ? '🌙' : '☀️'}
					</button>
				</div>

				{/* Menu cuando estemos en movil */}
				<button className="md:hidden text-white/80 text-2xl" onClick={() => setMobileOpen(prev => !prev)} aria-label="Toggle Menu">
					{mobileOpen ? '×' : '≡'}
				</button>
			</nav>
			{/* El desplegable del menu del movil */}
			{mobileOpen && (
				<div className={`md:hidden backdrop-blur-md w-full px-8 py-4 rounded-2xl z-50 ${modeDark === 'Dark' ? 'bg-white/10' : 'bg-gray-100/50'}`}>
					<ul className="flex flex-col gap-2">
						{items.map(item => (
							<li key={item}>
								<a
									href={`#${item.toLowerCase()}`}
									onClick={() => {
										setActiveItem(item)
										setMobileOpen(false)
									}}
									className={`block px-4 py-2 rounded-xl text-sm transition ${activeItem === item ? (modeDark === 'Dark' ? 'bg-white/20 text-white' : 'bg-black/5 text-black/80') : modeDark === 'Light' ? 'text-black/50 hover:text-black/80' : 'text-white/60 hover:text-white'}`}
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
