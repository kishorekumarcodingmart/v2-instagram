import React, { useState } from 'react'
import AccountDetails from '../Components/AccountDetails/AccountDetails'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import {MobileAccount} from '../Components/MobileNavbar/MobileNavbar'
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner'


function Account() {

  const [account, setAccount] = useState(true)

  setTimeout(()=>{
    setAccount(false)
  },500)

  return (
    <>
      {
        (account)?<LoadingSpinner />:(
        <>
          <NavbarFooter desktop={true} >
          <MobileAccount />
          </NavbarFooter>
          <div className='mt-2'>
            <AccountDetails />
          </div>
        </>)
      }

    </>
  )
}

export default Account