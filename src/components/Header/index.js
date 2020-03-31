import React from 'react'
import Button from './Button'
import bballImg from '../../assets/images/bball.png'

import './Header.css'

const buttons = ['standings', 'teams', 'bonus']

const bball = <img className='bball-img' src={bballImg} alt='long shot league' />

export default ({ hideNav, hideHeader, ...props }) =>
    <div
        className={'Header'.concat(hideHeader ? ' hidden' : '')}
        style={{ 'gridTemplateRows': hideNav ? '120px' : '90px 30px' }}
    >

        <div className='logo'>
            <h1>LONG SH{bball}T LEAGUE</h1>
        </div>

        {!hideNav && <div className='header-nav'>
            {buttons.map(b => <Button {...props} name={b} key={b} />)}
        </div>}

    </div>
