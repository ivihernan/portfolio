import {useEffect} from 'react'

export function useScrollSpy(ids, setActive) {
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const newActive = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
						setActive(newActive)
						history.replaceState(null, '', `#${entry.target.id}`)
					}
				})
			},
			{threshold: 0.6} // Detecta cuando el 60% de una sección está visible
		)

		ids.forEach(id => {
			const el = document.getElementById(id)
			if (el) observer.observe(el)
		})

		return () => observer.disconnect()
	}, [ids, setActive])
}
