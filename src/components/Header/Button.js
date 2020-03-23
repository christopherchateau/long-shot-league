import React from 'react'

import './Button.css'

export default ({ name, setPageDisplay }) => (
    <h3 className='btn' onClick={setPageDisplay}>
        {name}
    </h3>
)
