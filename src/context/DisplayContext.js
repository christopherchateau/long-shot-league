import React, { createContext, useState } from 'react'

export const DisplayContext = createContext()

const DisplayContextProvider = props => {
	const [display, setDisplay] = useState('standings')
	const [standingsDisplay, setStandingsDisplay] = useState('standings')
	const [selectedPlayer, setSelectedPlayer] = useState(null)

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
				selectedPlayer,
				standingsDisplay,
				openPlayerProfile,
				closePlayerProfile,
			}}
		>
			{props.children}
		</DisplayContext.Provider>
	)
}

export default DisplayContextProvider
