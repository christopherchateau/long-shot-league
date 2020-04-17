import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../utilities/apiCalls'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [data, setData] = useState(null)

	const loading = !data
	const teamsData = data && data.teams
	const bonusData = data && data.bonus
	const playersData = data && data.players
	const errors = (data && data.errors) || null
	const hideNav = data && data.errors.length

	useEffect(() => { loadData() }, [])

	const loadData = async () => setData(await getData())

	return (
		<DataContext.Provider
			value={{
				data,
				errors,
				loading,
				hideNav,
				teamsData,
				bonusData,
				playersData,
				refreshData: loadData,
			}}
		>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider
