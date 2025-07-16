import Navbar from '@/components/Navbar'
import HomePage from '@/components/HomePage'
import Work from '@/components/Work'
import About from '@/components/about'

export default function Home() {
	return (
		<>
			<Navbar />
			<div>
				<HomePage />
				<Work />
				<About />
			</div>
		</>
	)
}
