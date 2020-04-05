import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import playerPics from '../../assets/playerPics'

import './Player.css'

export default ({ player, player: { name, pointTotal }, rank }) => {
	const { openPlayerProfile } = useContext(DataContext)

	return (
		<div className='Player' onClick={() => openPlayerProfile(player)}>
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
	)
}
