import React, { Component } from 'react'
import Header from '../Header/'
import MainPage from '../MainPage/'

import './App.css'

export default class App extends Component {
    state = { pageDisplay: 'standings' }

    setPageDisplay = ({ target }) =>
        this.setState({ pageDisplay: target.innerText })

    render = () =>
        <div className='App'>

            <Header setPageDisplay={this.setPageDisplay} />
            <MainPage pageDisplay={this.state.pageDisplay} />

        </div>
}
