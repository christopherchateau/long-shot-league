import React, { createContext, useState } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export const DisplayContext = createContext()

const defaultPlayer = {
	name: '',
	teams: [],
	points: 0,
	bonuses: [],
	pointTotal: 0,
	bonusTotal: 0,
}

const DisplayContextProvider = props => {
	const [pageDisplay, setPageDisplay] = useState('standings')
	const [selectedPlayer, setSelectedPlayer] = useState(defaultPlayer)
	const [showModal, setShowModal] = useState(false)

	const openPlayerProfile = player => {
		setSelectedPlayer(player)
		setShowModal(true)
		disableBodyScroll(document.querySelector('.App'))
	}

	const closePlayerProfile = () => {
		setShowModal(false)
		clearAllBodyScrollLocks()
	}

	return (
		<DisplayContext.Provider
			value={{
				showModal,
				pageDisplay,
				setPageDisplay,
				selectedPlayer,
				openPlayerProfile,
				closePlayerProfile,
			}}
		>
			{props.children}
		</DisplayContext.Provider>
	)
}

export default DisplayContextProvider
