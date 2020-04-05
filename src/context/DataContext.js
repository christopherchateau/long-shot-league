import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../utilities/apiCalls'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [data, setData] = useState(null)
	const [display, setDisplay] = useState('standings')
	const [standingsDisplay, setStandingsDisplay] = useState('standings')
	const [selectedPlayer, setSelectedPlayer] = useState(null)
	const [hideNav, setHideNav] = useState(false)

	useEffect(() => { loadData() }, [])

	const loadData = async () => {
		setData(await getData())
	}

	const openPlayerProfile = player => {
		setSelectedPlayer(player)
        setStandingsDisplay('player info')
	}

	const closePlayerProfile = () => {
		setSelectedPlayer(null)
        setStandingsDisplay('standings')
	}

	return (
		<DataContext.Provider
			value={{
				data,
				refreshData: loadData,
				display,
				setDisplay,
				standingsDisplay,
				openPlayerProfile,
				closePlayerProfile,
				selectedPlayer,
				hideNav,
				setHideNav,
			}}
		>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider
