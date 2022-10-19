import React from 'react'
import '../Assets/Styles/SignupLogin.css'
import {InstagramLogo} from '../Utils/NavbarButton'
import LoginSignupFooter from '../Components/LoginSignupFooter/LoginSignupFooter'
import LockIcon from '../Assets/Images/Lock.png'
import Input from '../Components/Input/Input'
import { Link } from 'react-router-dom'
import DividerSection from '../Components/DividerSection/DividerSection'

function ResetPassword() {
  return (
    <>
        <section className='w-100 vh-100 bg-gray'>
            <div className='ResetPasswordWrapper'>
                <nav className='w-100 p-2 bb sticky top-0 bg-white flex justify-content-center'>
                    <div className="w-70 pt-2">
                        <InstagramLogo />
                    </div>
                </nav>
                <section className=' h-80 flex justify-content-center align-items-center'>
                    <div className='ResetPasswordModel w-30 flex flex-col justify-content-center bg-white' style={{border : "1px solid #dbdbdb"}}>
                        <div className='w-80 flex flex-col' style={{margin:"0 auto"}}>
                            <div style={{margin:"0 auto"}}><img src={LockIcon}  className="mt-3" alt="LockIcon" style={{width:"6rem",height: "6rem"}} /></div>
                            <div className='fw-bold flex px-2 justify-content-center'>Trouble with logging in?</div>
                            <div className='text-center text-gray fs-3 px-1'>Enter your email address, phone number or username, and we'll send you a link to get back into your account.</div>
                            <Input className="my-1 p-1" placeholder="Email address, phone number or username"/>
                            <button className='my-2 p-2 w-100'>Send Login Link</button>
                            <div className='mt-1 mb-3 fs-3 text-center '><Link className='text-blue'>Can't reset your password?</Link></div>
                            <div className='flex justify-content-center'><DividerSection/></div>
                            <div className='my-2 text-center'><Link to="/signup" className='link fw-bold fs-3'>Create New Account</Link></div>
                        </div>
                        <div className='p-2 w-100 text-center fw-bold bt'><Link to="/login" className='link'>Back to Login</Link></div>
                    </div>
                </section>
                <LoginSignupFooter />
            </div>
        </section>
    </>
  )
}

export default ResetPassword