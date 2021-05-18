
import React from 'react'
import ReactDOM from 'react-dom'

import Father from "./components/Father"
import Son from "./components/Son"



ReactDOM.render(  <div>
       <Father name='Luiz' lastname="Silva">
            <Son name='Luiz' />
            <Son name='Carla' />
            <Son name='Diego' />
       </Father>
    </div>, 
document.getElementById('root'))