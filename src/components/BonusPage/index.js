import React from 'react'
import Bonus from '../Bonus'
import { sortByKey } from '../helpers'

import './BonusPage.css'

export default ({ playerData, bonusData }) => {
    const playersDisplayed = sortByKey(playerData).map(player => {
        const bonusDataDisplayed = []

        const playerBonusTotal = bonusData.reduce((total, bonus) => {
            if (bonus.name === player.name) {
                bonusDataDisplayed.push(
                    <Bonus bonusData={bonus} key={bonus.id} />
                )
                total += bonus.points
            }
            return +total
        }, 0)

        return <div className='bonus-player' key={player.name}>

            <h3 className='bonus-player-name'>{`${player.name} - ${playerBonusTotal}`}</h3>
            <div>{bonusDataDisplayed}</div>

        </div>
    })

    return <div className='BonusPage'>{playersDisplayed}</div>
}
