import React, { useState, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { sortByKey } from '../../utilities/helper'

import './Teams.css'

const Teams = () => {
	const {
		data: { teamsData },
	} = useContext(DataContext)

	const [display, setDisplay] = useState('show all')
	const [teamSort, setTeamSort] = useState('name')

	let filteredTeams = teamsData

	if (display === 'still alive')
		filteredTeams = teamsData.filter(team => !team.is_eliminated)

	const teams = sortByKey(filteredTeams, teamSort).map(
		({ name, points, drafted_by, is_eliminated }) => (
			<div
				key={name}
				className={'team'.concat(is_eliminated ? ' red' : ' green')}
			>
				<h3>
					{name} - {points}
				</h3>
				<h5>{drafted_by}</h5>
			</div>
		)
	)

	const toggleTeamDisplay = () =>
		display === 'show all'
			? setDisplay('still alive')
			: setDisplay('show all')

	const toggleTeamSort = () =>
		teamSort === 'name' ? setTeamSort('drafted by') : setTeamSort('name')

	return (
		<div className='Teams'>
			<div className='team-btn-wrapper'>
				<button
					className='teams-toggle-btn'
					onClick={toggleTeamDisplay}
				>
					{display}
				</button>
				<button
					className='teams-display-btn'
					onClick={toggleTeamSort}
				>
					{teamSort}
				</button>
			</div>

			<br />

			<div className='teams-wrapper'>{teams}</div>
		</div>
	)
}

export default Teams
