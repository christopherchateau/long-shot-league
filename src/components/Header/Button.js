import React, { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import './Button.css'

export default ({ name }) => {
	const { setPageDisplay } = useContext(DisplayContext)

	return (
		<h3 className='btn' onClick={() => setPageDisplay(name)}>
			{name}
		</h3>
	)
}
