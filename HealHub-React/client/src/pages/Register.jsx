import React from 'react'
import { useState } from 'react';
import { createUser } from "../utils/Authentication.js";

import "./styles/Register.css";

const Register = () => {
    const [userDetails, setUserDetails] = useState({userFirstName: "", userLastName: "", userEmail: "", userPassword: ""});

    const handleChange = (event) => {
        setUserDetails({...userDetails, [event.target.name] : event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userDetails);
        createUser({...userDetails});
    };

    return (
        <div className="register-container">
            <form 
                className="register-form"
                method="post"
                onSubmit={handleSubmit}>
                <input 
                    className=""
                    name="userFirstName"
                    onChange={handleChange}
                    value={userDetails.userFirstName}
                    placeholder="Firstname">
                </input>
                <input 
                    className=""
                    name="userLastName"
                    onChange={handleChange}
                    value={userDetails.userLastName}
                    placeholder="Lastname">
                </input>
                <input 
                    className=""
                    name="userEmail"
                    onChange={handleChange}
                    value={userDetails.userEmail}
                    placeholder="Email">
                </input>
                <input 
                    className=""
                    name="userPassword"
                    onChange={handleChange}
                    value={userDetails.userPassword}
                    placeholder="Password">
                </input>
                <button className="btn btn-register" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
