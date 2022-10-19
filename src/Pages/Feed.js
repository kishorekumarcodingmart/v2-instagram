import React, {   useState } from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import FeedSection from '../Components/Feed/FeedSection'
import {MobileFeed} from '../Components/MobileNavbar/MobileNavbar'
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner'


function Feed() {

  const [feed, setFeed] = useState(true)


  setTimeout(()=>{
    setFeed(false)
  },500)

  return (
    <>

      {(feed)?<LoadingSpinner />:(
        <>
          <NavbarFooter desktop={true} >
            <MobileFeed />
          </NavbarFooter>
            <FeedSection  />
          
        </>
        )
      }
    </>
  )
}

export default Feed