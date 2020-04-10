import React, { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import PlayerInfo from '../PlayerInfo'
import Standings from '../Standings'
import Teams from '../Teams'
import BonusPage from '../BonusPage'

import './MainPage.css'

const MainPage = () => {
	const { pageDisplay } = useContext(DisplayContext)

	return (
		<div className='MainPage'>
			{pageDisplay === 'standings' && <Standings />}

			{pageDisplay === 'teams' && <Teams />}

			{pageDisplay === 'bonus' && <BonusPage />}

			<PlayerInfo />
		</div>
	)
}

export default MainPage
