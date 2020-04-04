import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../utilities/apiCalls'

export const DataContext = createContext()

const DataContextProvider = props => {
	const [data, setData] = useState(null)
	const [display, setDisplay] = useState('standings')
	const [standingsDisplay, setStandingsDisplay] = useState('standings')
	const [hideNav, setHideNav] = useState(false)

	useEffect(() => { loadData() }, [])

	const loadData = async () => {
		setData(await getData())
	}

	return (
		<DataContext.Provider
			value={{
				data,
				refreshData: loadData,
				display,
				setDisplay,
				standingsDisplay,
				setStandingsDisplay,
				hideNav,
				setHideNav,
			}}
		>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataContextProvider
