import React from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'


function Message() {
    document.title = "Inbox • Chats"
  return (
    <>
        <NavbarFooter desktop={true}/>
        Message
    </>
  )
}

export default Message