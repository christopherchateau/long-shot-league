import React, { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './Button.css'

export default ({ name }) => {
	const { setDisplay } = useContext(DisplayContext)

	return (
		<h3 className='btn' onClick={() => setDisplay(name)}>
			{name}
		</h3>
	)
}
