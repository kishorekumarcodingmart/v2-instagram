import React from 'react'
import AccountDetails from '../Components/AccountDetails/AccountDetails'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import {MobileAccount} from '../Components/MobileNavbar/MobileNavbar'

function Account() {
  return (
    <>
      <NavbarFooter desktop={true} >
        <MobileAccount />
      </NavbarFooter>
      <div className='mt-4'>
        <AccountDetails />
      </div>
    </>
  )
}

export default Account