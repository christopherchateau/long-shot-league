import React, { createContext, useState } from 'react'

export const DisplayContext = createContext()

const DisplayContextProvider = props => {
	const [pageDisplay, setPageDisplay] = useState('standings')
	const [selectedPlayer, setSelectedPlayer] = useState(null)

	const openPlayerProfile = player => setSelectedPlayer(player)

	const closePlayerProfile = () => setSelectedPlayer(null)

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
