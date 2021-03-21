import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Header from '../Header/'
import MainPage from '../MainPage/'
import Errors from '../Errors'
import Loading from '../Loading'
import Overlay from './Overlay'

import './App.css'

const App = () => {
	const { loading, errors } = useContext(DataContext)

	return (
		<div className='App'>
			<Header />

			{loading ? <Loading /> : errors.length ? <Errors /> : <Loading />}

			<Overlay />
		</div>
	)
}

export default App
