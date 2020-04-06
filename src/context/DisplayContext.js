import React, { createContext, useState } from 'react'

export const DisplayContext = createContext()

const DisplayContextProvider = props => {
	const [pageDisplay, setPageDisplay] = useState('teams')
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
				pageDisplay,
				setPageDisplay,
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
