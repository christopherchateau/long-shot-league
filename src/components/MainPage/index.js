import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import PlayerInfo from '../PlayerInfo'
import Standings from '../Standings'
import Teams from '../Teams'
import BonusPage from '../BonusPage'

import './MainPage.css'

const MainPage = () => {
	const {
		display,
		standingsDisplay,
	} = useContext(DataContext)

	const standings =
		standingsDisplay === 'standings' ? <Standings /> : <PlayerInfo />

	return (
		<div className='MainPage'>

			{display === 'standings' && standings}

			{display === 'teams' && <Teams />}

			{display === 'bonus' && <BonusPage />}

		</div>
	)
}

export default MainPage
