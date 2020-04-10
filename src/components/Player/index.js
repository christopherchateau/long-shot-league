import React, { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import playerPics from '../../assets/playerPics'

import './Player.css'

export default ({ player, rank, player: { name, pointTotal } }) => {
	const { openPlayerProfile } = useContext(DisplayContext)

	return (
		<div className='Player' onClick={() => openPlayerProfile(player)}>
			<h3 className='player-rank'>{rank}</h3>
			<h3 className='player-name'>{name}</h3>
			<h3 className='player-points'>{pointTotal}</h3>

			<div className='player-pic-wrapper'>
				<img
					className='player-pic'
					src={playerPics[name] || playerPics.playerImg}
					alt='player avatar'
				/>
			</div>
		</div>
	)
}
