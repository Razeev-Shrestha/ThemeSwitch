import { useEffect } from 'react'
import './App.css'
import { ThemeSwitch, useGlobalThemeSwitch } from './ThemeSwitch'
import { useThemeDetector } from './useThemeDetector'

export default function App() {
	const theme = useThemeDetector()

	// const CheckDarkThemeMode = window.matchMedia(
	// 	'(prefers-color-scheme:dark)'
	// ).matches
	const [themeMode, setThemeMode] = useGlobalThemeSwitch()

	// useEffect(() => {
	// 	if (CheckDarkThemeMode) {
	// 		setThemeMode('dark')
	// 	} else {
	// 		setThemeMode('light')
	// 	}
	// }, [CheckDarkThemeMode, setThemeMode])

	window
		.matchMedia('(prefers-color-scheme:dark)')
		.addEventListener('change', (event) => {
			console.log(event)
		})

	console.log(theme)

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
	}, [themeMode])

	return (
		<div className='App' data-theme={themeMode}>
			<h1>Hello CodeSandbox</h1>
			<ThemeSwitch />

			<h2>Current Applied Theme:{themeMode} </h2>
		</div>
	)
}
