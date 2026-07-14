'use client'

import {useState, useEffect} from 'react'
import Navbar from '@/components/Navbar'
import HomePage from '@/components/HomePage'
import Work from '@/components/Work'
//En local para que funcione el import tiene que ser About pero para produccion tiene que ser about
import About from '@/components/about'
import Footer from '@/components/Footer'

export default function Home() {
	const [modeDark, setModeDark] = useState('Dark')

	useEffect(() => {
		document.documentElement.classList.toggle('dark', modeDark === 'Dark')
	}, [modeDark])

	return (
		<>
			<Navbar modeDark={modeDark} setModeDark={setModeDark} />
			<div>
				<HomePage modeDark={modeDark} />
				<Work modeDark={modeDark} />
				<About modeDark={modeDark} />
			</div>
			<Footer modeDark={modeDark} />
		</>
	)
}
