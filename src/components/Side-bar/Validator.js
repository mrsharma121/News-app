import React, { useState } from "react";
import validator from 'validator'
import './validator.css';

const Validator = ({email, setemail, number, setnumber}) => {

const [emailError, setEmailError] = useState('')
const validateEmail = (e) => {
	setemail(e.target.value)

	if (validator.isEmail(email)) {
	setEmailError("")
	} else {
	setEmailError('Enter valid Email!')
	}
}

const [numberError, setnumberError] = useState('')
const validatenumber = (e) => {
	setnumber(e.target.value)

	if (validator.isMobilePhone(number)) {
	setnumberError("")
	} else {
	setnumberError('Enter valid Number!')
	}
}



return (
	<div className = "validator" >


		<input type="text" id="userEmail" autoComplete = "off" value = {email}
		onChange={(e) => validateEmail(e)}></input> 
		<span className = " email-error "
		
		>{emailError} </span>

<span  >Phone Number  </span><input type="text" id="userNumber" autoComplete = "off" value = {number}
		onChange={(e) => validatenumber(e)}></input> 
		<span className = " number-error "
		
		>{numberError} </span>

	</div>
);
}

export default Validator;
