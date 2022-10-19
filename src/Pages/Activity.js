import React, { useState } from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import {MobileActivity} from '../Components/MobileNavbar/MobileNavbar'
import ActivityContent from '../Components/ActivityContent/ActivityContent'
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner'


function Activity() {

  const [activity, setActivity] = useState(true)


  setTimeout(()=>{
    setActivity(false)
  },500)

  return (
    <>
    {
      (activity)?(<LoadingSpinner/>):(
        <>
        <NavbarFooter desktop={true}>
            <MobileActivity />
        </NavbarFooter>
        <ActivityContent />
    </>
      )
    }
    </>
  )
}

export default Activity