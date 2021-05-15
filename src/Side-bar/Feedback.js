import React, {useState} from 'react';
import './feedback.css';

const Feedback = ({parentCallback}) => {
    const [form, setform] = useState(false)
    parentCallback(form)
    const Contact = () =>{
        setform(!form)
    }

 
    return (
        <div className = "feedback" >
            <section className = "nav-feedback" >
            <h2>Have a Feedback</h2>
            <button onClick = {Contact} >Contact us</button>
            </section>
            <section className = {form? "form-active" : "form-inactive" }  >
               <span 
                // className=  { form? "form-active" : "form-inactive"  } 
               > Thank you so much for taking the time <br/>
                Please Provide the below details<br/>
            <form
            
            >
                First name
                <input
                type = "text"
                placeholder = "Enter Your Firstname"
                />
                Last name

                <input
                type = "text"
                placeholder = "Enter Your Lastname"
                />
                Address
                <input
                type = "text"
                placeholder = "Enter Your Address"
                style = {{height: "5rem",
                    width: "20rem"}}
                    
                
                />
                Country Name
                <input
                type = "text"
                placeholder = "Enter Your Country"
                
                />
                Email-ID
                <input
                type = "text"
                placeholder = "Enter Your Address"
                
                />
                Phone-number
                <input
                type = "text"
                placeholder = "Enter Your Address"
                
                />
                <button> Send the Feedback </button>
            </form>
                
                 </span>
            </section>
        </div>
    )
}

export default Feedback
