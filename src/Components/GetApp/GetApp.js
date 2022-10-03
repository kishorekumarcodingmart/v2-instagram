import React from 'react'
import './GetApp.css'
import AppleStore from '../../Assets/Images/appleStore.png'
import PlayStore from '../../Assets/Images/playStore.png'

function GetApp() {
  return (
    <>
        <div className="loginFooter flex flex-col justify-content-center align-items-center">
          <p className="getApp">Get the app.</p>
          <div className="flex flex-row justify-content-center align-items-center">
            <img src={AppleStore} alt="Apple Store" className="store m-1"/>
            <img src={PlayStore} alt="PLay Store" className="store m-1" />
          </div>
        </div>
    </>
  )
}

export default GetApp