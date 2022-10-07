import React from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import {MobileActivity} from '../Components/MobileNavbar/MobileNavbar'
import ActivityContent from '../Components/ActivityContent/ActivityContent'

function Activity() {
  return (
    <>
        <NavbarFooter desktop={true}>
            <MobileActivity />
        </NavbarFooter>
        <ActivityContent />
    </>
  )
}

export default Activity