import React, { useState } from 'react'
import './Model.css'
import Input from '../Input/Input'
import { sendForm } from '../../Api/sendForm'


function Model({ data }) {

  // const dataWithOtp = {...data}

  const [otp, setOtp] = useState({otp:""})

  const handleChange = (e) => {
    const {name, value} = e.target
    setOtp({...otp,[name]:value})
    console.log(name,value)
  }

  // const sendForm = async() => {
  //   await fetch('https://a947-115-246-250-59.in.ngrok.io/user/signup', {
  //     method : "POST",
  //     body : JSON.stringify(data),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //   .then(res => res.json())
  //   .then(res => console.log(res))

  // }

  const handleForm = (e) => {
    e.preventDefault()
    data.otp = otp.otp
    sendForm("user/signup/",data)
  }

  return (
    <>
    <div className="modalBackground1 flex justify-content-center align-items-center w-100vw vh-100">
        <div className="modalContainer mt-2 w-50 h-auto flex flex-col text-center p-2">
            <div className="title text-center mt-2">
                <h2>Enter your OTP</h2>
            </div>
            <div className="body flex flex-col justify-content-center align-items-center text-center mt-3">
                <p className='p-1'>The next page looks amazing. Hope you want to go there!</p>
                <form onSubmit={handleForm} className='flex flex-col'>
                    <Input onChange={handleChange} value={otp.otp} type="text" name="otp" placeholder="Enter OTP" className="p-1 otpInput mt-3" />
                    <button type='submit' className='my-2 p-1'>Submit</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Model