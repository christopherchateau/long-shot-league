import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import Header from '../Header/'
import MainPage from '../MainPage/'
import Errors from '../Errors'
import loadingImg from '../../assets/images/loading.gif'

import './App.css'

const App = () => {
	const { data } = useContext(DataContext)

	// const [display, setDisplayState] = useState('standings')
	// const [hideNav, setHideNav] = useState(false)

	// const setDisplay = ({ target }) => setDisplayState(target.innerText)

	// const hideNav = () => setHideNav(true)

	const loading = (
		<img className='loading-img' src={loadingImg} alt='loading' />
	)

	return (
		<div className='App'>
			<Header
				{...{
					// hideNav,
					// setDisplay,
				}}
			/>

            {!data

                ? loading
                : data.errors.length

                    ? <Errors {...{ errors }} />
                    : <MainPage
                        {...{
                            // data,
                            // display,
                            // hideNav: this.hideNav,
                        }}
				/>
			}
		</div>
	)
}

export default App
