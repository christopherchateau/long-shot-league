import React from 'react'
import playerPics from '../../assets/playerPics'

import './Player.css'

export default ({ name, pointTotal, rank, handlePlayerClick }) =>
    <div className='Player' onClick={() => handlePlayerClick(name)}>

        <h3 className='player-rank'>{rank}</h3>
        <h3 className='player-name'>{name}</h3>
        <h3 className='player-points'>{pointTotal}</h3>

        <div className='player-pic-wrapper'>

            <img
                className='player-pic'
                src={playerPics[name]}
                alt='player avatar'
            />

        </div>

    </div>
