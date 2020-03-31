import React, { Component } from 'react'
import Header from '../Header/'
import MainPage from '../MainPage/'
import Errors from '../Errors'
import { getData } from '../../utilities/apiCalls'
import loadingImg from '../../assets/images/loading.gif'

import './App.css'

export default class App extends Component {
	state = {
        data: [],
        errors: [],
        pageDisplay : 'standings',
		hideNav: false,
    }

    componentDidMount = async () => {
        const data = await getData()
        const errors = data.filter(resp => resp.error)

        errors.length
            ? this.setState({ errors }, this.hideNav())
            : this.setState({ data })
    }

	setPageDisplay = ({ target }) =>
		this.setState({ pageDisplay: target.innerText })

    hideNav = () => this.setState({ hideNav: true })
    
    get showLoading() { return !this.state.data.length }

    get showErrors() { return this.state.errors.length }

	render = () => {
        const { data, errors, pageDisplay, hideNav } = this.state

        const loading = <img className='loading-img' src={loadingImg} alt='loading' />

		return <div className='App'>
            <Header
                {...{
                    hideNav,
                    setPageDisplay: this.setPageDisplay,
                }}
            />

            {this.showErrors ? <Errors {...{ errors }} />

                    : this.showLoading ? loading

                        : <MainPage
                            {...{
                                data,
                                pageDisplay,
                                hideNav: this.hideNav,
                            }}
                        />

            }
        </div>
	}
}
