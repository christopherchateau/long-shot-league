import React, { Component } from 'react'
import Header from '../Header/'
import MainPage from '../MainPage/'

import './App.css'

export default class App extends Component {
	state = {
		pageDisplay: 'standings',
		hideHeader: false,
		hideNav: false,
	}

	setPageDisplay = ({ target }) =>
		this.setState({ pageDisplay: target.innerText })

	hideHeader = bool => this.setState({ hideHeader: bool })

	hideNav = () => this.setState({ hideNav: true })

	render = () => {
		const { pageDisplay, hideHeader, hideNav } = this.state

		return <div className='App'>
            <Header
                {...{
                    hideNav,
                    hideHeader,
                    setPageDisplay: this.setPageDisplay,
                }}
            />
            <MainPage
                {...{
                    pageDisplay,
                    hideHeader: this.hideHeader,
                    hideNav: this.hideNav,
                }}
            />
        </div>
	}
}
