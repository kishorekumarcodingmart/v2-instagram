import React from 'react'
import './IndividualStory.css'

function IndividualStory({img,username}) {
  return (
    <>
        <div className="individual-story">
            {/* <!-- Story --> */}
            <div className="circle">
                <img src={img} className="storyPhotoMobile" alt="img" />
                <svg className='MobileRotate' viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                </svg>
            
                <div className='UsernameStoryMobileinside'>{username}</div>
            </div>
            {/* <!-- Story End --> */}
        </div>
    </>
  )
}

export default IndividualStory