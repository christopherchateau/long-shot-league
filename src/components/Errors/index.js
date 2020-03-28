import React from 'react'

import './Errors.css'

export default ({ errors }) => <div className='container'>

    <h1 className='title'>ERROR</h1>

    {errors.map(({ error }) =>
        <h3 key={error}>{error}</h3>
    )}

</div>
