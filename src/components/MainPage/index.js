import React, { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import PlayerInfo from '../PlayerInfo'
import Standings from '../Standings'
import Teams from '../Teams'
import BonusPage from '../BonusPage'

import './MainPage.css'

const MainPage = () => {
	const {
		pageDisplay,
		standingsDisplay,
	} = useContext(DisplayContext)

	const standings =
		standingsDisplay === 'standings' ? <Standings /> : <PlayerInfo />

	return (
		<div className='MainPage'>

			{pageDisplay === 'standings' && standings}

			{pageDisplay === 'teams' && <Teams />}

			{pageDisplay === 'bonus' && <BonusPage />}

		</div>
	)
}

export default MainPage
