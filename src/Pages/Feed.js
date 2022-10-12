import React from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import FeedSection from '../Components/Feed/FeedSection'
import {MobileFeed} from '../Components/MobileNavbar/MobileNavbar'

function Feed() {
  return (
    <>

      <NavbarFooter desktop={true}>
        <MobileFeed/>
      </NavbarFooter>
      <FeedSection />

    </>
  )
}

export default Feed