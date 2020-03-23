import React, { Component } from 'react'
import bballImg from '../../images/bball.png'
import './Header.css'

class Header extends Component {
    render() {
        const { handleNavBarClick } = this.props
        return (
            <div className='Header'>
                <div className='header-logo'>
                    <h1>
                        LONG SH
                        <img className='bball-img' src={bballImg} alt='basketball' />T
                        LEAGUE
                    </h1>
                </div>

                <div className='header-nav'>
                    <h3
                        className='header-nav-link'
                        onClick={handleNavBarClick}
                    >
                        standings
                    </h3>
                    <h3
                        className='header-nav-link'
                        onClick={handleNavBarClick}
                    >
                        teams
                    </h3>
                    <h3
                        className='header-nav-link'
                        onClick={handleNavBarClick}
                    >
                        bonus
                    </h3>
                </div>
            </div>
        )
    }
}

export default Header
