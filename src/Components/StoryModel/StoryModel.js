import React, { useEffect, useRef } from 'react'
import './StoryModel.css'
import {InstgramLogoWhite, CloseBtnStory} from '../../Utils/NavbarButton'
import StorySlider from '../StorySlider/StorySlider';


function StoryModel({StoryModelFunc}) {

    const StoryModelRef = useRef();
    useEffect(()=>{
        StoryModelFunc(StoryModelRef)
    },[StoryModelFunc])

  return (
    <>
        <div id="myModal" className="modal" ref={StoryModelRef}>
        <span className="mobileClose p-3" onClick={() => { StoryModelRef.current.style.display = 'none' }}><CloseBtnStory /></span>
            <div className="modal-content vh-100" >
                <div style={{ position: "sticky", top: "0px", backgroundColor: "#1a1a1a" }} >
                    <div className='storynav flex justify-content-between align-items-center'>
                        <div className='p-2'><InstgramLogoWhite /></div>
                        <span className="close pr-3" onClick={() => { StoryModelRef.current.style.display = 'none' }}><CloseBtnStory /></span>
                    </div>                        
                </div>
                <div className='individualStoryModel'>
                    <StorySlider />
                </div>
            </div>
            
        </div>
    </>
  )
}

export default StoryModel