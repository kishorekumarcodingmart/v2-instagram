import React from 'react'
import LazyLoading from '../LazyLoading/LazyLoading'
import './IndividualStory.css'

function IndividualStory({img,username, onClickFunc, loading}) {

  return (
    <>

            <div className="individual-story" onClick={onClickFunc}>
              {
                (loading)?(<LazyLoading classN="storyLazy m-2"/>):(
                  <div className="circle">
                    <img src={img} className="storyPhotoMobile" alt="img" />
                    <svg className='MobileRotate' viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" />
                    </svg>
                    <div className='UsernameStoryMobileinside lowercase'>{username}</div>
                  </div>
                )
              }
              
            </div>

        
    </>
  )
}

export default IndividualStory