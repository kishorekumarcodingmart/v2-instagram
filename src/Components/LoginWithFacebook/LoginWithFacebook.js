import React from 'react'
import './LoginWithFacebook.css'
import FacebookLogo from '../../Assets/Images/facebook.png'
import { Link } from 'react-router-dom'

function LoginWithFacebook() {
  return (
    <>
        <div className="login_with_facebook flex flex-row justify-content-center align-items-center my-1">
            <img src={FacebookLogo} alt="FacebookLogo" />
            <Link to="/">Log in with Facebook</Link>
        </div>
    </>
  )
}

export default LoginWithFacebook