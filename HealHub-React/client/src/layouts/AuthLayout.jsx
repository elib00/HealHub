import React from 'react';
import "./styles/AuthLayout.css";
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <Outlet /> 
    </div>
  )
}

export default AuthLayout;
