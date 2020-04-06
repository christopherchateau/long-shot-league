import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import DataContextProvider from './context/DataContext'
import DisplayContextProvider from './context/DisplayContext'
import * as serviceWorker from './serviceWorker'

import './index.css'

ReactDOM.render(
	<DataContextProvider>
		<DisplayContextProvider>
			<App />
		</DisplayContextProvider>
	</DataContextProvider>,
	document.getElementById('root')
)

serviceWorker.unregister()
