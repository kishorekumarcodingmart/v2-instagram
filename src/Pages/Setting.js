import React from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import {MobileSetting} from '../Components/MobileNavbar/MobileNavbar'
import AccountSetting from '../Components/AccountSetting/AccountSetting'

function Setting() {
  return (
    <>
        <NavbarFooter desktop={true}>
          <MobileSetting />
        </NavbarFooter>
        <AccountSetting />
    </>
  )
}

export default Setting