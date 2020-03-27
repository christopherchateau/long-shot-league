import React from 'react'
import Player from '../Player'
import { sortByKey } from '../helpers'
import loadingImg from '../../assets/images/loading.gif'

import './Standings.css'

export default ({ players, handlePlayerClick }) => {
    const playerListSorted = sortByKey(players, 'pointTotal').reverse()

    let counter = 1
    const formattedPlayers = playerListSorted.map((player, i) => {
        i > 0 && player.pointTotal === playerListSorted[i - 1].pointTotal
            ? counter++
            : counter = 0

        return <Player
            handlePlayerClick={handlePlayerClick}
            {...player}
            rank={i + 1 - counter}
            key={player.name}
        />
    })

    return !players.length
        ? <img className='loading-img' src={loadingImg} alt='loading' />
        : <div className='Standings'>
    
                <div className='current-standings-header'>
                    <h5>rank</h5>
                    <h5>name</h5>
                    <h5 className='current-standings-points'>points</h5>
                </div>

                {formattedPlayers}

            </div>
}
