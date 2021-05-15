import React from 'react'
import Toggle from './Toggle';
import Feedback from './Feedback'
import { useState } from 'react';

const ContactUs = () => {
    const [style, setstyle] = useState()
    
    const HideToggle = (value) =>{
        setstyle(value)
    }

    return (
        <div>
            <section className = "reader" >
              <h1> Hello Reader </h1>
            </section>
            <Toggle style = {style} />
            <Feedback parentCallback={HideToggle} />
        </div>
    )
}

export default ContactUs
