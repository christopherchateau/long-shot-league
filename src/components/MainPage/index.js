import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../contexts/DataContext'
import PlayerInfo from '../PlayerInfo'
import Standings from '../Standings'
import Teams from '../Teams'
import BonusPage from '../BonusPage'
import { sumPoints, sortByKey } from '../../utilities/helpers'

import './MainPage.css'

const MainPage = () => {
	const {
		data: { playersData, teamsData, bonusData },
		display,
		standingsDisplay,
	} = useContext(DataContext)

	const [selectedPlayer, setSelectedPlayer] = useState('')

	useEffect(() => {
		compileStandings()
	}, [data])

	const compileStandings = () => {
		const players = playersData.map(({ name }) => {
			const teams = teamsData.filter(
				({ drafted_by }) => drafted_by === name
			)
			const points = sumPoints(teams)
			const bonuses = this.getPlayerBonuses(name, bonusData)
			const bonusTotal = sumPoints(bonuses)
			const pointTotal = points + bonusTotal

			return {
				name,
				teams,
				points,
				bonuses,
				bonusTotal,
				pointTotal,
			}
		})

		this.setState({
			playersData: players,
			teamsData: sortByKey(teamsData),
			bonusData,
		})
	}

	const getPlayerBonuses = (name, bonusData) =>
		bonusData.filter(bonus => bonus.name === name)

	const handlePlayerClick = selectedPlayer =>
		this.setState({ selectedPlayer, standingsDisplay: 'player info' })

	const handleBackClick = () =>
		this.setState({ selectedPlayer: '', standingsDisplay: 'standings' })

	render = () => {

		const selectedPlayerData = playersData.find(
			player => player.name === selectedPlayer
		)

		const standings =
			standingsDisplay === 'standings' ? (
				<Standings
					{...{
						playersData,
						handlePlayerClick: this.handlePlayerClick,
					}}
				/>
			) : (
				<PlayerInfo
					{...{
						selectedPlayerData,
						handleBackClick: this.handleBackClick,
					}}
				/>
			)

		return (
			<div className='MainPage'>
				{this.showStandings && standings}

				{this.showTeams && <Teams {...{ teamsData }} />}

				{this.showBonus && <BonusPage {...{ playersData, bonusData }} />}
			</div>
		)
	}
}

export default MainPage
