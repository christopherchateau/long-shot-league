import React, { Component } from 'react'

import Button from './Button'
import bball from '../../images/bball.png'

import './Header.css'

class Header extends Component {
    render() {
        // const { handleNavBarClick } = this.props
        const bballImg = (
            <img className='bball-img' src={bball} alt='basketball' />
        )

        return (
            <div className='Header'>
                <div className='logo'>
                    <h1>LONG SH{bballImg}T LEAGUE</h1>
                </div>

                <div className='header-nav'>
                    <Button {...this.props} name='standings' />
                    <Button {...this.props} name='teams' />
                    <Button {...this.props} name='bonus' />
                </div>
            </div>
        )
    }
}

export default Header
