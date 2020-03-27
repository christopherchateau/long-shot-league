import React from 'react'
import Bonus from '../Bonus'
import { sortByKey } from '../helpers'
import loadingImg from '../../assets/images/loading.gif'
import './BonusPage.css'

export default ({ players, bonusList }) => {
    const playersDisplayed = sortByKey(players).map(player => {
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

    return !players.length
        ? <img className='loading-img' src={loadingImg} alt='loading' />
        : <div className='BonusPage'>{playersDisplayed}</div>
}
