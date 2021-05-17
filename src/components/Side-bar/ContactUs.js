import React from 'react'
import Toggle from './Toggle';
import Feedback from './Feedback'
import { useState } from 'react';
import './contactus.css';

const ContactUs = ({toggle, onToggle}) => {
    const [style, setstyle] = useState()
    
    const HideToggle = (value) =>{
        setstyle(value)
    }

    return (
        <div>
            <section className = "reader" >
              <h1> Hello Reader </h1>
              <i>Welcome to the news</i>
            </section>
            <Toggle style = {style}
            toggle = {toggle}
            onToggle = {onToggle}
            />
            <Feedback parentCallback={HideToggle}
            toggle = {toggle}
            />
        </div>
    )
}

export default ContactUs
