import React, { useContext } from 'react'
import { DisplayContext } from '../../context/DisplayContext'
import playerPics from '../../assets/playerPics'

import './PlayerInfo.css'

export default () => {
	const {
		selectedPlayer: {
			name,
			teams,
			points,
			bonuses,
			pointTotal,
			bonusTotal,
		},
		showModal,
		closePlayerProfile,
	} = useContext(DisplayContext)

	const pic = playerPics[name] || playerPics.playerImg

	const bonus = !bonuses.length
		? '-none-'
		: bonuses.map(({ description, points }) => (
				<h5 key={description}>{`${description} - ${points}pt`}</h5>
		  ))

	return (
		<div
			onTouchStart={closePlayerProfile}
			className={'PlayerInfo'.concat(showModal ? ' showModal' : '')}
		>
			<div
				className='background-img'
				style={{ backgroundImage: `url(${pic})` }}
			/>

			<div className='darkener' />

			{/* <button className='back-btn' onClick={closePlayerProfile}>
				X
			</button> */}

			<h1 className='player-info-name'>{name}</h1>

			<img className='player-info-pic' src={pic} alt='player avatar' />

			<div className='player-info-totals'>
				<h5>
					points
					<p className='player-info-num'>{points}</p>
				</h5>

				<h5>
					bonus
					<p className='player-info-num'>{bonusTotal}</p>
				</h5>

				<h5>
					total
					<p className='player-info-num'>{pointTotal}</p>
				</h5>
			</div>

			<div className='player-info-teams'>
				{teams.map(({ name, points, is_eliminated }) => (
					<h5
						className={
							is_eliminated === 'TRUE' ? 'eliminated' : null
						}
						key={name}>
						{`${name} (${points})`}
					</h5>
				))}
			</div>

				<div className='player-info-bonus'>
					<h3 className='player-info-bonus-title'>bonus</h3>

					{bonus}
				</div>
		</div>
	)
}
