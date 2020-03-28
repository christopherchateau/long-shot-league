import React from 'react'
import Bonus from '../Bonus'
import { sortByKey } from '../helpers'

import './BonusPage.css'

export default ({ playerList, bonusList }) => {
    const playersDisplayed = sortByKey(playerList).map(player => {
        const bonusListDisplayed = []

        const playerBonusTotal = bonusList.reduce((total, bonus) => {
            if (bonus.name === player.name) {
                bonusListDisplayed.push(
                    <Bonus bonusList={bonus} key={bonus.id} />
                )
                total += bonus.points
            }
            return +total
        }, 0)

        return <div className='bonus-player' key={player.name}>

            <h3 className='bonus-player-name'>{`${player.name} - ${playerBonusTotal}`}</h3>
            <div>{bonusListDisplayed}</div>

        </div>
    })

    return <div className='BonusPage'>{playersDisplayed}</div>
}
