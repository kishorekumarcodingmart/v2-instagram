import React from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import {MobileInbox} from '../Components/MobileNavbar/MobileNavbar'
import Inbox from '../Components/Inbox/Inbox'

function Message() {
    // document.title = "Inbox • Chats"
  return (
    <>
        <NavbarFooter desktop={true}>
          <MobileInbox />
        </NavbarFooter>
        <Inbox />
    </>
  )
}

export default Message