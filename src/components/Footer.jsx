'use client'
import Image from 'next/image'

export default function Footer() {
	return (
		<>
			<section id="contact" className=" text-white py-8 px-4">
				<div className="max-w-5xl mx-auto flex flex-col items-center justify-center font-mono text-center gap-8">
					<h2 className="text-4xl font-bold">Contact</h2>

					<p className="text-white/70 text-lg ">
						Mail
						<a href="mailto:iviherpol11@gmail.com" className="text-[#10b981] hover:underline ml-5">
							iviherpol11@gmail.com
						</a>
					</p>

					<div className="flex gap-8 flex-wrap justify-center mt-4">
						<a href="https://www.instagram.com/iviherpol11/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#10b981] transition-colors">
							<Image src="/assets/arrow-top-right.svg" alt="arrow" width={16} height={16} className="invert" />
							Instagram
						</a>
						<a href="https://www.linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#10b981] transition-colors">
							<Image src="/assets/arrow-top-right.svg" alt="arrow" width={16} height={16} className="invert" />
							LinkedIn
						</a>
						<a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#10b981] transition-colors">
							<Image src="/assets/arrow-top-right.svg" alt="arrow" width={16} height={16} className="invert" />
							GitHub
						</a>
					</div>

					<div className="mt-8 text-white/40 text-sm">© {new Date().getFullYear()} Ivan Hernandez. All rights reserved.</div>
				</div>
			</section>
		</>
	)
}
