import Navbar from '@/components/Navbar'
import HomePage from '@/components/HomePage'

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="w-full">
				<HomePage />
			</div>
		</>
	)
}
