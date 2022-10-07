import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { SwitchAccount, ReportAProblem, Setting, Saved, ProfileIcon, HomeOn, HomeOf, SearchOn, SearchOff, MessageOn, MessageOff, NewPost, ActivityFeedOff, ActivityFeedOn, FindPeopleOn, FindPeopleOff } from '../../Utils/NavbarButton'
import NavarDropdown from '../NavbarDropdown/NavbarDropdown'
import './NavbarFooter.css'

function NavbarFooter({desktop, children}) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    })

  return (
    <>
        <nav className="navbar-wrapper">
            <section className="navbar-content-wrapper">
                {/* <!-- Logo DropDown --> */}
                {
                    (desktop && windowWidth>600)?(<NavarDropdown />):<><>{children}</></>
                }
                
                {/* <!-- Search and Menu Icons --> */}
                <div className="search-menu-icons">
                    <div className="search-box">
                        <input type="search" placeholder="Search" /> 
                    </div>
                    <div className="menu-isons">
                        <Link className="icons" to='/'>
                            {(window.location.pathname==='/')?<HomeOn />:<HomeOf />}
                            
                        </Link>
                        <Link className="icons search-desktop" to='/explore'>
                            {(window.location.pathname==='/explore')?<SearchOn />:<SearchOff />}   
                        </Link>
                        <Link className="icons Messenger-mobile" to='/message'>
                            {(window.location.pathname==='/message')?<MessageOn />:<MessageOff />}
                            
                        </Link>
                        <Link className="icons" to='/'><NewPost /></Link>
                        <Link className="icons Find-people-mobile" to='/explore'>
                            {(window.location.pathname==='/explore')?<FindPeopleOn />:<FindPeopleOff />}   
                        </Link>
                        <Link className="icons" to='/activity'>
                             {(window.location.pathname==='/activity')?<ActivityFeedOn />:<ActivityFeedOff />}   
                        </Link>
                        <Link className="icons " to='/account'>

                        {(desktop && windowWidth>600)?(
                            <div className='tooltip'>
                                <img className="nav-profile-Photo" src={'https://instagram-clone-mrkishorekumar.netlify.app/img.png'} alt="ProfilePhoto"/>
                                <div className="tooltiptext flex flex-col">
                                    <div className='flex m-2 gap-2'><ProfileIcon/> <p>Profile</p></div>
                                    <div className='flex m-2 gap-2'><Saved/> <p>Saved</p></div>
                                    <div className='flex m-2 gap-2'><Setting/> <p>Setting</p></div>
                                    <div className='flex m-2 gap-2'><ReportAProblem/> <p>Report a Problem</p></div>
                                    <div className='flex m-2 gap-2'><SwitchAccount/> <p>Switch Account</p></div>
                                    <hr className='line' />
                                    <div className='flex m-2 gap-2'>Logout</div>
                                </div>
                            </div>):
                            (<div>
                                <img className="nav-profile-Photo" src={'https://instagram-clone-mrkishorekumar.netlify.app/img.png'} alt="ProfilePhoto"/>
                            </div>)}
                            
                        </Link>
                            
                    </div>
                </div>
            </section>
        </nav>
    </>
  )
}

export default NavbarFooter