import React, { useState } from 'react'
import { sendForm } from '../Api/sendForm'
import { validateEmail, validatePassword, validatePhone, validateUserName } from '../Helper/Validate'
import { Link } from 'react-router-dom';
import '../Assets/Styles/SignupLogin.css'
import Instgarm from '../Assets/Images/instagram-title.png'
import Input from '../Components/Input/Input';
import SignupLoginWrapper from '../Components/SignupLoginWrapper/SignupLoginWrapper';
import DividerSection from '../Components/DividerSection/DividerSection';
import LoginWithFacebook from '../Components/LoginWithFacebook/LoginWithFacebook';
import GetApp from '../Components/GetApp/GetApp';
import LoginSignupFooter from '../Components/LoginSignupFooter/LoginSignupFooter';


// location, deviceName

function Login() {
  document.title = "Log in • Instagram";

  const [formData, setFormData] = useState({userName:"", password:"", deviceName:window.navigator.userAgent, location : "Codingmart"})

  const handleChange = (e) => {
    let {name, value} = e.target
    setFormData({...formData, [name]: value});
  }

  const valdation = (value) => {
    if (validateEmail(value.userName) || validatePhone(value.userName) || validateUserName(value.userName)){
      if (validatePassword(value.password)){
        return true
      }
      else{
        return false
      }
    }
    else {
      return false
    }
    
  }

  // const sendForm = () => {
  //   fetch('https://c24e-115-246-250-59.in.ngrok.io/user/login', {
  //     method : "POST",
  //     body : JSON.stringify(formData),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // }

  const handleForm = (e) => {
    e.preventDefault()
    valdation(formData)?sendForm("user/login",formData):alert("Username or Password Wrong")
    
  }
  

  return (
    <>
      <section className="wrapper-section flex flex-col justify-content-center align-items-center vh-100">
        <div className="w-box flex flex-col justify-content-center align-items-center">
          <div className='mt-4 mb-3'>
            <img src={Instgarm} alt="Instgarm" />
          </div>

          <form action="/feed" method='POST' onSubmit={handleForm} className='w-100 p-2 flex flex-col justify-content-center align-items-center'>
            <Input onChange={handleChange} value={formData.userName} type="text" name="userName" placeholder="Mobile Number or Email" className="m-1 p-2" />
            <Input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Password" className="m-1 p-2" />  
            <Input type="submit" value="Log in" className="m-1 p-2" />  
          </form>

          <DividerSection />

          <LoginWithFacebook />

          <div className="Forgotten_Password">
            <Link to="/">Forgotten your password?</Link>
          </div>

        </div>
        <SignupLoginWrapper query="Don't have an account?" linkname="Signup" link="/signup" />

        <GetApp />
      </section>

      <LoginSignupFooter />
    </>
  )
}

export default Login