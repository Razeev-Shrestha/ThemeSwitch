import { DarkModeToggle, Mode } from '@anatoliygatt/dark-mode-toggle'
import { createUseGlobalStateHook } from './useGlobalState'

export const useGlobalThemeSwitch = createUseGlobalStateHook<Mode>(
	'theme',
	'light'
)

export const ThemeSwitch = () => {
	const [themeMode, setThemeMode] = useGlobalThemeSwitch()

	const changeTheme = (newTheme: Mode) => {
		setThemeMode(newTheme)
	}

	return (
		<DarkModeToggle
			mode={themeMode}
			dark={`Dark`}
			light={`Light`}
			size='md'
			inactiveTrackColor='#e2e8f0'
			inactiveTrackColorOnHover='#f8fafc'
			inactiveTrackColorOnActive='#cbd5e1'
			activeTrackColor='#334155'
			activeTrackColorOnHover='#1e293b'
			activeTrackColorOnActive='#0f172a'
			inactiveThumbColor='#1e293b'
			activeThumbColor='#e2e8f0'
			onChange={changeTheme}
		/>
	)
}
