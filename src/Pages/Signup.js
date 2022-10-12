import React, { useState } from 'react' 
import { sendForm } from '../Api/sendForm'
import Model from '../Components/ModelBox/Model'
import { validateEmail, validatePassword, validateUserName } from '../Helper/Validate'
import '../Assets/Styles/SignupLogin.css'
import Instgarm from '../Assets/Images/instagram-title.png'
import Input from '../Components/Input/Input';
import SignupLoginWrapper from '../Components/SignupLoginWrapper/SignupLoginWrapper';
import DividerSection from '../Components/DividerSection/DividerSection';
import LoginWithFacebook from '../Components/LoginWithFacebook/LoginWithFacebook';
import GetApp from '../Components/GetApp/GetApp';
import LoginSignupFooter from '../Components/LoginSignupFooter/LoginSignupFooter';

function Signup() {
  document.title = "Sign up • Instagram";

  const [formData, setForm] = useState({email:"",name:"",userName:"",password:"", deviceName:window.navigator.userAgent, location : "Codingmart"})

  const [modalOpen, setModalOpen] = useState(false);


  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...formData,[name]:value})
  }

  const valdation = (value) => {
    if(validateEmail(value.email) && validateUserName(value.userName) && validatePassword(value.password)){
      return true
    }
    else {
      alert("Form Incorrect")
    }
  }

  // const sendForm = async() => {
  //   await fetch('https://a947-115-246-250-59.in.ngrok.io/user/generateOtp', {
  //     method : "POST",
  //     body : JSON.stringify({data}),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //   // .then(res => res.json())
  //   .then(res => console.log("Sign up",res))

  // }

  const handleForm = async (e) => {
    e.preventDefault()
    if (valdation(formData)){
      await sendForm("user/generateOtp/",formData)
      setModalOpen(true)
    }
    else{alert("Username or Password Wrong")}
  }




  return (
    <>
      <section className="wrapper-section flex flex-col justify-content-center align-items-center vh-100 w-100">
        <div className="w-box flex flex-col justify-content-center align-items-center">

          <div className='mt-3'>
            <img src={Instgarm} alt="Instgarm" />
          </div>

          <div className="text-center text-gray">
            <div className='fs-1 p-1'>Sign up to see photos and videos from your friends.</div>
          </div>

          <LoginWithFacebook />

          <DividerSection />

          <form onSubmit={handleForm} className='w-100 p-2 flex flex-col justify-content-center align-items-center'>
            <Input onChange={handleChange} value={formData.email} type="email" name="email" placeholder="Mobile Number or Email" className="m-1 p-2" />
            <Input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Full Name" className="m-1 p-2" />  
            <Input onChange={handleChange} value={formData.userName} type="text" name="userName" placeholder="Username" className="m-1 p-2" />  
            <Input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Password" className="m-1 p-2" />  
            <Input onChange={handleChange} type="submit" value="Sign up" className="m-1 p-2" />  
          </form>

        </div>
        
        <SignupLoginWrapper query="Have an account?" linkname="Login" link="/login" />

        <GetApp />
      {modalOpen && <Model data={formData} />}
      </section>
      <LoginSignupFooter />
    </>
  )
}

export default Signup