import React from 'react'

import './Bonus.css'

export default ({ bonusData: { description, points } }) =>
    <div className='Bonus'>
        <h5>{`${description} (${points}pt)`}</h5>
    </div>
