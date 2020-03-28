import React, { Component } from 'react'
import Header from '../Header/'
import MainPage from '../MainPage/'

import './App.css'

export default class App extends Component {
    state = {
        pageDisplay: 'standings',
        hideNav: false,
    }

    setPageDisplay = ({ target }) =>
        this.setState({ pageDisplay: target.innerText })

    catchError = () => this.setState({ hideNav: true })

    render = () => {
        const { pageDisplay, hideNav } = this.state

        return <div className='App'>
            <Header {...{ hideNav, setPageDisplay: this.setPageDisplay }} />
            <MainPage {...{ pageDisplay, catchError: this.catchError }} />
        </div>
    }
}
