import { Mode } from '@anatoliygatt/dark-mode-toggle'
import { useEffect } from 'react'
import './App.css'
import { ThemeSwitch, useGlobalThemeSwitch } from './ThemeSwitch'

export default function App() {
	const [themeMode, setThemeMode] = useGlobalThemeSwitch()
	const themeFromStorage = localStorage.getItem('__theme_mode__') as Mode

	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme:dark)')
			.addEventListener('change', (event) => {
				if (event.matches) {
					setThemeMode('dark')
				} else {
					setThemeMode('light')
				}
			})
	}, [themeMode, setThemeMode])

	useEffect(() => {
		if (themeFromStorage !== null) {
			setThemeMode(themeFromStorage)
		}
	}, [])

	return (
		<div className='App' data-theme={themeMode}>
			<h1>Hello CodeSandbox</h1>
			<ThemeSwitch />

			<h2>Current Applied Theme:{themeMode} </h2>
		</div>
	)
}
