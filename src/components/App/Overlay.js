import React, { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'

import './Overlay.css'

export default () => {
	const { showModal } = useContext(DisplayContext)
	return (
		<div
			className={'overlay'.concat(
				showModal ? ' showOverlay' : ' hideOverlay'
			)}
			style={{ top: `${window.scrollY}px` }}
		/>
	)
}
