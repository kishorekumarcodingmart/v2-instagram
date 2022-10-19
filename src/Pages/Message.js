import React, { useState } from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import {MobileInbox} from '../Components/MobileNavbar/MobileNavbar'
import Inbox from '../Components/Inbox/Inbox'
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner'


function Message() {

  const [message, setMessage] = useState(true)

  setTimeout(()=>{
    setMessage(false)
  },500)

  return (
    <>
    {
      (message)?(<LoadingSpinner />):(
        <>
        <NavbarFooter desktop={true}>
          <MobileInbox />
        </NavbarFooter>
        <Inbox />y
        </>
      )
    }
    </>
    
    
  )
}




export default Message