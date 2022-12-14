import React, { useState } from 'react'
import { sendForm } from '../Api/sendForm'
import { useSelector } from 'react-redux'
import { validateEmail, validatePassword, validatePhone, validateUserName } from '../Helper/Validate'
import { Link, Navigate } from 'react-router-dom';
import '../Assets/Styles/SignupLogin.css'
import {InstagramLogo} from '../Utils/NavbarButton'
import Input from '../Components/Input/Input';
import SignupLoginWrapper from '../Components/SignupLoginWrapper/SignupLoginWrapper';
import DividerSection from '../Components/DividerSection/DividerSection';
import LoginWithFacebook from '../Components/LoginWithFacebook/LoginWithFacebook';
import GetApp from '../Components/GetApp/GetApp';
import LoginSignupFooter from '../Components/LoginSignupFooter/LoginSignupFooter';


// location, deviceName

function Login() {

  const theme = useSelector((state)=>state.theme.data.dark)

  document.title = "Log in • Instagram";

  const [formData, setFormData] = useState({userName:"", password:"", deviceName:window.navigator.userAgent, location : "Codingmart"})

  const [navigate, setNavigate] = useState(false)

  const handleChange = (e) => {
    let {name, value} = e.target
    setFormData({...formData, [name]: value});
  }

  const valdation = (value) => {
    if (validateEmail(value.userName) || validatePhone(value.userName) || validateUserName(value.userName)){
      if (validatePassword(value.password)){ return true }
      else{ return false } }
    else {return false}
    
  }

  const handleForm = (e) => {
    e.preventDefault()
    if(!valdation(formData)){
      alert('Wrong Data');
      return
    }
    sendForm("user/login",formData,null,"POST")
    .then(res => {
      console.log(res);
      localStorage.setItem('tokenKey', res.accessToken);
      (res.accessToken===null)?alert("Error"):setNavigate(true)
      
    })
    .catch(err => {
      console.log(err)
    })
  }
  

  return (
    <>
      <section className={theme?"drak-body wrapper-section flex flex-col justify-content-center align-items-center vh-100":"wrapper-section flex flex-col justify-content-center align-items-center vh-100"}>
        <div className={theme?"drak-border drak-head w-box flex flex-col justify-content-center align-items-center":"w-box flex flex-col justify-content-center align-items-center"}>
          <div className='mt-4 mb-3'>
            <InstagramLogo />
          </div>

          <form action="/feed" method='POST' onSubmit={handleForm} className='w-100 p-2 flex flex-col justify-content-center align-items-center'>
            <Input onChange={handleChange} value={formData.userName} type="text" name="userName" placeholder="Mobile Number or Email" className={theme?"drak-body drak-border m-1 p-2":"m-1 p-2"}/>
            <Input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Password" className={theme?"drak-body drak-border m-1 p-2":"m-1 p-2"} />  
            <Input type="submit" value="Log in" className="m-1 p-2" />  
          </form>

          <DividerSection />

          <LoginWithFacebook />

          <div className="Forgotten_Password">
            <Link to="/accounts/login/">Forgotten your password?</Link>
          </div>

        </div>
        <SignupLoginWrapper query="Don't have an account?" linkname="Signup" link="/signup" />

        <GetApp />
      </section>

      <LoginSignupFooter />
      {navigate && ( <Navigate to="/" replace={true} /> )}
    </>
  )
}

export default Login