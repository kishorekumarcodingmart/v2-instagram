import React from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import {MobileExplore} from '../Components/MobileNavbar/MobileNavbar'



function Explore() {
  return (
    <>
       <NavbarFooter desktop={true}>
        <MobileExplore />
        </NavbarFooter> 
       Explore
    </>
  )
}

export default Explore