import React, { createContext, useState } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export const DisplayContext = createContext()

const DisplayContextProvider = props => {
	const [pageDisplay, setPageDisplay] = useState('standings')
	const [selectedPlayer, setSelectedPlayer] = useState(null)

	const openPlayerProfile = player => {
		setSelectedPlayer(player)
		disableBodyScroll(document.querySelector('.MainPage'))
	}

	const closePlayerProfile = () => {
		setSelectedPlayer(null)
		clearAllBodyScrollLocks()
	}

	return (
		<DisplayContext.Provider
			value={{
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
