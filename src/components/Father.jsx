import React from "react"
import Son from './Son'
import { childrenWithProps } from "../utils/utils";


export default props => 
    <div>
        <h1> {props.name}  {props.lastname}</h1>
        <ul>
            {/* <Son name="Pedro" lastname={props.lastname}/>
            <Son {...props} />
            <Son {...props} name="Carla"/> */}
            
            {childrenWithProps(props)}

        </ul>
    </div>
