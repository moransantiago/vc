import { useState } from 'react'

export const useInputValue = ({ initialValue, resetOnEsc }) => {
	const [value, setValue] = useState(initialValue)
	const onChange = e => setValue(e.target.value)
	const onKeyDown = resetOnEsc ? e => e.keyCode === 27 && setValue('') : null

	return { value, onChange, onKeyDown, setValue }
}
