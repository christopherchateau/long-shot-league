import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Header from '../Header/'
import MainPage from '../MainPage/'
import Errors from '../Errors'
import Loading from '../Loading'


import './App.css'

const App = () => {
	const { data } = useContext(DataContext)
    const errors = data && data.errors

	return (
		<div className='App'>
			<Header />

            {!data

                ? <Loading />
                : errors.length

                    ? <Errors {...{errors}} />
                    : <MainPage />
			}
		</div>
	)
}

export default App
