import React, {  useEffect, useState } from 'react'
import NavbarFooter from '../Components/NavbarFooter/NavbarFooter'
import FeedSection from '../Components/Feed/FeedSection'
import {MobileFeed} from '../Components/MobileNavbar/MobileNavbar'
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner'
import axios from 'axios'



function Feed() {

  const [feed, setFeed] = useState({})

  

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_KEY}feed`, {
      headers: { 'Content-Type': 'application/json', 'x-access-token' : localStorage.getItem("tokenKey") }})
      .then(res => {setFeed(res.data) })
  },[])
  

  return (
    <>

      {(JSON.stringify(feed))==="{}"?<LoadingSpinner />:(
        <>
          <NavbarFooter desktop={true} profile={feed.profile}>
            <MobileFeed />
          </NavbarFooter>
            <FeedSection postSection={feed.postSection} profile={feed.profile} storiesSection={feed.storiesSection} suggestionSection={feed.suggestionSection} />
          
        </>
        )
      }
    </>
  )
}

export default Feed