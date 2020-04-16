import React, { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'

import './Overlay.css'

export default () => {
	const { showModal, closePlayerProfile } = useContext(DisplayContext)
	return (
		<table
			className={'overlay'.concat(showModal ? ' showOverlay' : ' hideOverlay')}
			onClick={closePlayerProfile}
		/>
	)
}
