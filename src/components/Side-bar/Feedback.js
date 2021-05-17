import React, {useState} from 'react';
import './feedback.css';
import CountryName from './CountryName';
import Validator from './Validator';
import database from '../Firebase';

const Feedback = ({parentCallback, toggle}) => {
    const [form, setform] = useState(false)
    const [Firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [address, setaddress] = useState("")
    const [country, setcountry] = useState("")
    const [submit, setsubmit] = useState(false)



    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")

    parentCallback(form)
    const Contact = () =>{
        setform(!form)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        database.collection("contacts")
        .add({
          Firstname: Firstname,
          lastname: lastname,
          address : address,
          country: country,
          email: email,
          ContactNo: number
        })


    };

    const onsubmit = () =>{
        setsubmit(!submit)
    }
    

 
    return (
        <div className = {form? "feedback-without-toggle" : "feedback-with-toggle" } >
            <section className = {form? "nav-without-toogle" : "nav-with-toogle" } >
            <h3>Have a Feedback</h3>
            <button className = {form? "contact-btn-red" : "contact-btn-green"  } onClick = {Contact} >We're Listening</button>
            </section>
            <section className ={toggle?  form? "form-active" : "form-inactive" : form? "form-active1" : "form-inactive" }  >
               <span 
               > <h3 className = "heading1" >Thank you so much for taking the time </h3> <br/>
                <h4 className = "heading2" >Please Provide the below details </h4> <br/>
            <form onSubmit = {handleSubmit}
            
            >
                <span className = "text" >First name</span>
                <input
                type = "text"
                placeholder = "Enter Your Firstname"
                value = {Firstname}
                onChange = {(e) => setfirstname(e.target.value)}
                />
               <span className = "text" > Last name</span>

                <input
                type = "text"
                placeholder = "Enter Your Lastname"
                value = {lastname}
                onChange = {(e) => setlastname(e.target.value)}
                />
               <span className = "text" > Address</span>
                <input
                type = "text"
                placeholder = "Enter Your Address"
                value = {address}
                onChange = {(e) => setaddress(e.target.value)}
                style = {{height: "5rem",
                    width: "40rem"}}
                    
                
                />
               <span className = "text" > Country Name</span>
               <CountryName
                    country = {country}
                    setcountry = {setcountry}
               />

               <span className = "text" > Email-ID</span>

                    <Validator
                    email = {email}
                    setemail = {setemail}
                    number = {number}
                    setnumber = {setnumber}
                    />

                    

                <button onClick = {onsubmit}  className = {submit?   "feedback-submit-clicked" : "feedback-btn" } > Send the Feedback </button>
            </form>
                
                 </span>
                 <span className = "space-to-blur" >  </span>
            </section>
        </div>
    )
}

export default Feedback