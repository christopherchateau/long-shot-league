import React from 'react'
import Button from './Button'
import bball from '../../assets/images/bball.png'

import './Header.css'

const bballImg = <img className='bball-img' src={bball} alt='long shot league' />

export default ({ ...props }) =>
    <div className='Header'>

        <div className='logo'>
            <h1>LONG SH{bballImg}T LEAGUE</h1>
        </div>

        <div className='header-nav'>
            <Button {...props} name='standings' />
            <Button {...props} name='teams' />
            <Button {...props} name='bonus' />
        </div>

    </div>
