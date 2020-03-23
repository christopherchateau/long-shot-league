import React, { Component } from 'react'
import Player from '../Player'
import loadingImg from '../../images/loading.gif'
import './Standings.css'

class Standings extends Component {
    render() {
        const { players, handlePlayerClick } = this.props

        const playerListSorted = players.sort((a, b) => {
            if (a.pointTotal > b.pointTotal) return -1
            if (a.pointTotal < b.pointTotal) return 1
        })

        let counter = 1
        const formattedPlayers = playerListSorted.map((player, i) => {
            i > 0 && player.pointTotal === playerListSorted[i - 1].pointTotal
                ? counter++
                : (counter = 0)

            return (
                <Player
                    handlePlayerClick={handlePlayerClick}
                    {...player}
                    rank={i + 1 - counter}
                    key={player.name}
                />
            )
        })

        if (!players.length) {
            return (
                <img className='loading-img' alt='loading' src={loadingImg} />
            )
        } else {
            return (
                <div className='Standings'>
                    <div className='current-standings-header'>
                        <h5>rank</h5>
                        <h5>name</h5>
                        <h5 className='current-standings-points'>points</h5>
                    </div>
                    {formattedPlayers}
                </div>
            )
        }
    }
}

export default Standings
