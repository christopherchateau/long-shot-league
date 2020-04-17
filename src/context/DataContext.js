import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../utilities/apiCalls'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [data, setData] = useState(null)

	useEffect(() => { loadData() }, [])

	const loadData = async () => setData(await getData())

	return (
		<DataContext.Provider
			value={{
				data,
				loading: !data,
				hideNav: data && data.errors.length,
				errors: (data && data.errors) || null,
				teamsData: data && data.teamsData,
				bonusData: data && data.bonusData,
				playersData: data && data.playersData,
				refreshData: loadData,
			}}
		>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider
