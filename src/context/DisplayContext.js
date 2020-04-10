import React, { createContext, useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

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

	const mainPageEl = document.querySelector('.App')

	const openPlayerProfile = player => {
		setSelectedPlayer(player)
		setShowModal(true)
		disableBodyScroll(mainPageEl)
	}

	const closePlayerProfile = () => {
		setShowModal(false)
		enableBodyScroll(mainPageEl)
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
