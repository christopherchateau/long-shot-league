import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Player from '../Player'
import { sortByKey } from '../../utilities/helper'

import './Standings.css'

export default () => {
	const {
		data: { playersData },
	} = useContext(DataContext)
    // console.log('sfd', playersData)
	const playersDataSorted = sortByKey(playersData, 'pointTotal').reverse()

    let counter = 1
	const formattedPlayers = playersDataSorted.map((player, i) => {
		i > 0 && player.pointTotal === playersDataSorted[i - 1].pointTotal
			? counter++
            : counter = 0

		const rank = i + 1 - counter
		return <Player {...{ player, rank, key: player.name }} />
	})

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
