import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Bonus from '../Bonus'

import './BonusPage.css'

export default () => {
	const {
		data: { playersData, bonusData },
	} = useContext(DataContext)

	const playerBonuses = playersData.map(player => {
		const bonuses = []

		const playerBonusTotal = bonusData.reduce((total, bonus) => {
			if (bonus.name === player.name) {

				bonuses.push(
                    <Bonus {...{ ...bonus, key: bonus.id }} />
                )
				total += bonus.points
            }

            return +total
		}, 0)

		return (
			<div className='bonus-player' key={player.name}>
				<h3 className='bonus-player-name'>{`${player.name} - ${playerBonusTotal}`}</h3>
				<div>{bonuses}</div>
			</div>
		)
	})

	return <div className='BonusPage'>{playerBonuses}</div>
}
