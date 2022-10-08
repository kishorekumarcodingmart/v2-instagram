import {InstagramLogo, MessageOff, Setting, DiscoverPeople, DownArrowIcon, NewChat} from '../../Utils/NavbarButton'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import './MobileNavbar.css'

export const MobileFeed = () => {
    return(
        <>
            <div className='flex justify-content-between align-items-center gap-1 w-100 ml-2'>
                <div style={{margin:"1% 0"}}><InstagramLogo /></div>
                <div className='flex align-items-center gap-3 mr-2'>
                    {/* <div><NewPost /></div> */}
                    <div><Link to="/message"><MessageOff /></Link></div>
                </div>
            </div>
        </>
    )
}

export const MobileExplore = () => {
    return(
        <>
            <section className='w-100 flex justify-content-center align-items-center'>
                <Input type="text" name="Search" placeholder="Search" className="exploreSearch"/>
            </section>
        </>
    )
}

export const MobileActivity = () => {
    return (
        <>
            <p className='text-center w-100 fw-bold m-1'>Activity</p>
        </>
    )
}

export const MobileAccount = () => {
    return (
        <>
            <div className='flex align-items-center justify-content-between w-100'>
                <div className='ml-2'><Setting /></div>
                <div className='flex'><h3 className='mr-1'>mrkishorekumar</h3> <div className='downArrow'><DownArrowIcon /></div></div>
                <div className='mr-2'><DiscoverPeople /></div>
            </div>
        </>
    )
}


export const MobileInbox = () => {
    return (
        <>
            <div className='flex align-items-center justify-content-between w-100'>
                <div className='ml-2 rightArrow'><DownArrowIcon /></div>
                <div className='flex'><h3 className='mr-1'>mrkishorekumar</h3> <div className='downArrow'><DownArrowIcon /></div></div>
                <div className='mr-2'><NewChat /></div>
            </div>
        </>
    )
}