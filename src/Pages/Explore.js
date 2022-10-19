import React, { useState } from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import {MobileExplore} from '../Components/MobileNavbar/MobileNavbar'
import ExplorePostGridSystem from '../Components/ExplorePostGridSystem/ExplorePostGridSystem'
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner'



function Explore() {

  const [explore,setExplore] = useState(true)

  setTimeout(()=>{
    setExplore(false)
  },500)

  return (
    <>
    {
      (explore)?(<LoadingSpinner/>):(
        <>
       <NavbarFooter desktop={true}>
        <MobileExplore />
        </NavbarFooter> 
       <ExplorePostGridSystem />
    </>
      )
    }
    </>
  )
}

export default Explore