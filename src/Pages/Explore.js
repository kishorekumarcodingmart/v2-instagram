import React from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import {MobileExplore} from '../Components/MobileNavbar/MobileNavbar'
import ExplorePostGridSystem from '../Components/ExplorePostGridSystem/ExplorePostGridSystem'




function Explore() {
  return (
    <>
       <NavbarFooter desktop={true}>
        <MobileExplore />
        </NavbarFooter> 
       <ExplorePostGridSystem />
    </>
  )
}

export default Explore