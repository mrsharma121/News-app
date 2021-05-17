import React, { useState } from 'react'
import './toggle.css'
import {Posts} from '../Posts';


const Toggle = ({style, toggle, onToggle}) => {

    const [togglecolor, settogglecolor] = useState(true)
    console.log(toggle)
    return (
        <>


        <div className = {style?  "hide-toggle" : "show-toggle" } >
        <div className = "toggle" >
            <h1>View Toggle</h1>
            <div >
            <button className = "btn"  onClick = {onToggle} > Toggle </button> 
            </div>
        </div>
        </div>
        </>
    )
}

export default Toggle
