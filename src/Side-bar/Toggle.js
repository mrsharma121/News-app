import React from 'react'
import './toggle.css'

const Toggle = ({style}) => {
    return (
        <div className = {style?  "hide-toggle" : "show-toggle" } >
        <div className = "toggle" >
            <h1>View Togggle</h1>
            <div className = "btn" >
            <button> row </button> <button>box</button>
            </div>
        </div>
        </div>
    )
}

export default Toggle
