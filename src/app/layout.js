import {Geist, Geist_Mono, Bebas_Neue} from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const bebasNeue = Bebas_Neue({
	variable: '--font-bebas',
	subsets: ['latin'],
	weight: '400',
})

export const metadata = {
	title: 'Ivan Hernandez Pollino',
	description: 'Mi portfolio personal donde puedes conocerme un poco más viendo algunos de mis proyectos y quien soy.',
	keywords: ['Ivan', 'Hernandez', 'Pollino', 'Portfolio', 'Desarrollador', 'Web', 'Fullstack', 'React', 'Next.js', 'JavaScript', 'CSS', 'HTML'],
	authors: [{name: 'Ivan Hernandez Pollino'}],
	creators: 'Ivan Hernandez Pollino',
	openGraph: {
		title: 'Ivan Hernandez Pollino',
		description: 'Mi portfolio personal donde puedes conocerme un poco más viendo algunos de mis proyectos y quien soy.',
		url: 'https://ivihernan.vercel.app',
		siteName: 'Ivan Hernandez Pollino',
		locale: 'es_ES',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: '/assets/logo_RRSS.png',
	},
}

export default function RootLayout({children}) {
	return (
		<html lang="en" translate="no" className="dark">
			<head>
				<meta name="google" content="notranslate" />
				<meta charSet="utf-8" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}>{children}</body>
		</html>
	)
}
