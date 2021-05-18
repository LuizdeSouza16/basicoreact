import React from 'react'

export default props => [
    <h1 key='h1'>Good Morning {props.name}!</h1>,
    <h2 key='h2'>See you soon {props.age}!</h2>
]



// export default props => 
//     <React.Fragment>
//         <h1>Good Morning {props.name}!</h1>
//         <h2>See you soon {props.age}!</h2>
//     </React.Fragment>
