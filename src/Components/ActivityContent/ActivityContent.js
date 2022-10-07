import React from 'react'
import './ActivityContent.css'
import {UpArrowIcon} from '../../Utils/NavbarButton'
import ActivityComponent from './ActivityComponent/ActivityComponent'
import SuggestionAccount from '../SuggestionAccount/SuggestionAccount'

function ActivityContent() {
  return (
    <>
        <section className='ActivityContentWrapper'>
            <div className='FollowReq mt-4 flex justify-content-between'>
                <div className='mt-1 ml-2 flex justify-content-between align-items-center'>
                    <div><img className='ActivityImg' src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} alt="img" /></div>
                    <div className='detailsA flex flex-col ml-2'>
                        <h4>Follow requests</h4>
                        <p>smk_here + 83 others</p>
                    </div>
                </div>
                <div className='arrowUp'>
                    <UpArrowIcon />
                </div>
            </div>
            <hr className='line'/>
            <div>
                <p className='fw-bold timeLine'>Today</p>
                <ActivityComponent />
            </div>
            <hr className='line'/>
            <div>
                <p className='fw-bold timeLine'>Yesterday</p>
                <ActivityComponent />
            </div>
            <hr className='line'/>
            <div>
                <p className='fw-bold timeLine'>This Week</p>
                <ActivityComponent />
            </div>
            <hr className='line'/>
            <div className='mb-3'>
                <p className='fw-bold timeLine'>This Month</p>
                <ActivityComponent />
            </div>
            <hr className='line'/>
            <div className='mt-3'>
                 <p className='fw-bold mb-3'>Suggestion for You</p>
                <SuggestionAccount profilePhoto="https://instagram-clone-mrkishorekumar.netlify.app/img.png" name="M R Kishore Kumar" userName="mrkishore"/>
            </div>
        </section>
    </>
  )
}

export default ActivityContent