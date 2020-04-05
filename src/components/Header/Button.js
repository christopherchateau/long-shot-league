import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import './Button.css'

export default ({ name }) => {
	const { setDisplay } = useContext(DataContext)

	return (
		<h3 className='btn' onClick={() => setDisplay(name)}>
			{name}
		</h3>
	)
}
