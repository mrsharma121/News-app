import React from 'react'
import './toggle.css'


const Toggle = ({style, toggle, onToggle}) => {

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
