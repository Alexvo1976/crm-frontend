import React, { useState } from "react";
import { Card } from 'react-bootstrap'
import { LoginForm } from "../../components/login/Login.comp";
import './entry.style.css'
import { ResetPassword } from "../../components/password-reset/passwordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");


  const handleOnChange = e => {
		const { name, value } = e.target;
    console.log( name, value)

		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

  const handleOnSubmit = async e => {
		e.preventDefault();

    if (!email || !password) {
			return alert("Fill up all the form!");
		}
  };

  const handleOnResetSubmit = async e => {
		e.preventDefault();

    if (!email) {
			return alert("Please enter the email!");
		}
    (console.log(email));
  };

  const formSwitcher = frmType => {
		setFrmLoad(frmType);
	};
  return (
    <div className="entry-page bg-info">
    <Card className="form-box">
    {frmLoad === "login" && <LoginForm 
     handleOnChange={handleOnChange}
     handleOnSubmit = {handleOnSubmit}
     formSwitcher = {formSwitcher}
     email= {email}
     password= {password}
     />}
    {frmLoad === "reset" && <ResetPassword 
    handleOnChange={handleOnChange}
    handleOnResetSubmit = {handleOnResetSubmit}
     formSwitcher = {formSwitcher}
     email= {email}
     password= {password}
     />}
    </Card>
  </div>
  );
  
};
