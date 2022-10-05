import React from 'react'
import './IndividualStory.css'

function IndividualStory({img,username}) {
  const loder = (e) => {
    console.log(e.target)
  }
  return (
    <>
        <div className="individual-story" onClick={loder}>
            <div className="circle">
                <img src={img} className="storyPhotoMobile" alt="img" />
                <svg className='MobileRotate' viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                </svg>
            
                <div className='UsernameStoryMobileinside'>{username}</div>
            </div>
        </div>
    </>
  )
}

export default IndividualStory