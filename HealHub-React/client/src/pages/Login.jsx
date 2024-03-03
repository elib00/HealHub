import React from 'react'
import { useState } from "react";
import { validateUser } from '../utils/Authentication';

const Login = () => {
  const [userDetails, setUserDetails] = useState({userEmail: "", userPassword: ""});

  const handleChange = (event) => {
    setUserDetails({...userDetails, [event.target.name] : event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userDetails);
    validateUser({...userDetails});
  }

  return (
    <div>
        <form 
          onSubmit={handleSubmit}
          method="post"
        >
          <input
            onChange={handleChange}
            name="userEmail"
            value={userDetails.userEmail}
            placeholder="Email">
          </input>
          <input
            onChange={handleChange}
            name="userPassword"
            value={userDetails.userPassword}
            placeholder="Password">
          </input>
          <button>Log In</button>
        </form>
    </div>
  )
}

export default Login;
