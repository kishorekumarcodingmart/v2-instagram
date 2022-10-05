import {InstagramLogo, MessageOff, NewPost} from '../../Utils/NavbarButton'
import { Link } from 'react-router-dom'

export const MobileFeed = () => {
    return(
        <>
            <div className='flex justify-content-between align-items-center gap-1 w-100 ml-2'>
                <div style={{margin:"1% 0"}}><InstagramLogo /></div>
                <div className='flex align-items-center gap-3 mr-2'>
                    <div><NewPost /></div>
                    <div><Link to="/message"><MessageOff /></Link></div>
                </div>
            </div>
        </>
    )
}

export const MobileExplore = () => {
    return(
        <>
            <h1>MobileExplore</h1>
        </>
    )
}