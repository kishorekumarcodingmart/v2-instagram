import React from 'react'
import './NavbarDropdown.css'
import { InstagramLogo, MessageOff, NewStoryMobile, DropDownIcon, Following, Favourites } from '../../Utils/NavbarButton'
import { Link } from 'react-router-dom'


function NavarDropdown() {
  return (
    <>
        <div className="logo-dropdown">
            <div className="camera-icon-mobile"><NewStoryMobile /></div>
            <div className="logo">
                <InstagramLogo />
            </div>
            <div className="chat-icon-mobile"><MessageOff /></div>
            {/* <!-- Drop Down --> */}
            <div id="dropDownIcon">
                <div id="dropdown">
                    <button id="dropbtn">
                        <DropDownIcon />
                    </button>
                    <div id="dropdown-content">
                        <Link to="/">
                            <Following />
                            Following
                        </Link>
                        <Link to="/">
                            <Favourites />
                            Favourites
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavarDropdown