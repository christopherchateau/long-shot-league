import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Header from '../Header/'
import MainPage from '../MainPage/'
import Errors from '../Errors'
import Loading from '../Loading'

import './App.css'

const App = () => {
	const { data, errors } = useContext(DataContext)
	console.log(errors)
	return (
		<div className='App'>
			<Header />

            {!data

                ? <Loading />
                : errors.length

                    ? <Errors />
                    : <MainPage />
			}
		</div>
	)
}

export default App
