import { useCallback } from 'react'
import useSWR from 'swr'

type SetValue<T> = (value: T) => void

type GlobalStateHookResult<T> = [T, SetValue<T>]

const defaultOptions = {
	revalidateOnFocus: false,
	revalidateOnReconnect: false,
	refreshWhenHidden: false,
	refreshWhenOffline: false,
}

function useGlobalState<T>(
	key: string,
	defaultValue: T
): GlobalStateHookResult<T> {
	const { data: state = defaultValue, mutate } = useSWR(
		key,
		null,
		defaultOptions
	)

	const setState = useCallback(
		(value: T): void => {
			mutate(value, false)
		},
		[mutate]
	)

	return [state as T, setState]
}

export function createUseGlobalStateHook<T>(key: string, defaultValue: T) {
	return () => useGlobalState<T>(key, defaultValue)
}
