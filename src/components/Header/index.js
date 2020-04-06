import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Button from './Button'
import bballImg from '../../assets/images/bball.png'

import './Header.css'

const buttons = ['standings', 'teams', 'bonus']

const bball = <img className='bball-img' src={bballImg} alt='long shot league' />

export default () => {
	const { hideNav } = useContext(DataContext)

	return (
		<div className='Header'>
			<div className='logo'>
				<h1>LONG SH{bball}T LEAGUE</h1>
			</div>

			{!hideNav && (
				<div className='header-nav'>
					{buttons.map(name => (
						<Button {...{ name, key: name }} />
					))}
				</div>
			)}
		</div>
	)
}
