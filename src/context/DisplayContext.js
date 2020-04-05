import React, { createContext, useState, useEffect } from 'react'
// import { getData } from '../utilities/apiCalls'

export const DisplayContext = createContext()

const DisplayContextProvider = props => {
	const [display, setDisplay] = useState('standings')
	const [standingsDisplay, setStandingsDisplay] = useState('standings')
	const [selectedPlayer, setSelectedPlayer] = useState(null)
	// const [hideNav, setHideNav] = useState(false)

	const openPlayerProfile = player => {
		setSelectedPlayer(player)
        setStandingsDisplay('player info')
	}

	const closePlayerProfile = () => {
		setSelectedPlayer(null)
        setStandingsDisplay('standings')
	}

	return (
		<DisplayContext.Provider
			value={{
				display,
				setDisplay,
				standingsDisplay,
				openPlayerProfile,
				closePlayerProfile,
				selectedPlayer,
				// hideNav,
				// setHideNav,
			}}
		>
			{props.children}
		</DisplayContext.Provider>
	)
}

export default DisplayContextProvider
