import React from 'react'
import Button from './Button'
import bball from '../../assets/images/bball.png'

import './Header.css'

const buttons = ['standings', 'teams', 'bonus']
const bballImg = <img className='bball-img' src={bball} alt='long shot league' />

export default ({ hideNav, ...props }) =>
    <div
        className='Header'
        style={{ 'gridTemplateRows': hideNav ? '120px' : '90px 30px' }}
    >

        <div className='logo'>
            <h1>LONG SH{bballImg}T LEAGUE</h1>
        </div>

        {!hideNav && <div className='header-nav'>
            {buttons.map(b => <Button {...props} name={b} key={b} />)}
        </div>}

    </div>
