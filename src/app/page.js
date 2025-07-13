import Navbar from '@/components/Navbar'
import HomePage from '@/components/HomePage'
import Work from '@/components/Work'

export default function Home() {
	return (
		<>
			<Navbar />
			<div>
				<HomePage />
				<Work />
			</div>
		</>
	)
}
