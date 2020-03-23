import React, { Component } from 'react'
import bball from '../../images/bball.png'
import './Header.css'

class Header extends Component {
    render() {
        const { handleNavBarClick } = this.props
        const bballImg = <img className='bball-img' src={bball} alt='basketball' />

        return (
            <div className='Header'>
                <div className='header-logo'>
                    <h1>LONG SH{bballImg}T LEAGUE</h1>
                </div>

                <div className='header-nav'>
                    <h3 className='header-nav-link' onClick={handleNavBarClick}>
                        standings
                    </h3>
                    <h3 className='header-nav-link' onClick={handleNavBarClick}>
                        teams
                    </h3>
                    <h3 className='header-nav-link' onClick={handleNavBarClick}>
                        bonus
                    </h3>
                </div>
            </div>
        )
    }
}

export default Header
