import React from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import FeedSection from '../Components/Feed/FeedSection'
import {MobileFeed} from '../Components/MobileNavbar/MobileNavbar'
import {sendForm} from '../Api/sendForm'

function Feed() {
  sendForm("feed",{accessToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwia…2Njd9.MYoEBJ3ByrhuJltU0eeexE_Fu5l8y0qhL4RC0p19kHE"},"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjY2MDkyMjY3LCJleHAiOjE2NjYxNzg2Njd9.MYoEBJ3ByrhuJltU0eeexE_Fu5l8y0qhL4RC0p19kHE")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err)
  })
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