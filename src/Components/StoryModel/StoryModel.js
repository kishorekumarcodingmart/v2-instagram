import React, { useEffect, useRef } from 'react'
import './StoryModel.css'
import {InstgramLogoWhite, CloseBtnStory} from '../../Utils/NavbarButton'


function StoryModel({StoryModelFunc}) {

    const StoryModelRef = useRef();
    useEffect(()=>{
        StoryModelFunc(StoryModelRef)
    },[])
    // ref={StoryModelRef}
  return (
    <>
        <div id="myModal" className="modal" ref={StoryModelRef}>
                <div className="modal-content vh-100" >
                    <div style={{ position: "sticky", top: "0px", backgroundColor: "#1a1a1a" }} className="p-2">
                        <div className='flex justify-content-between align-items-center'>
                            <div className='p-2'><InstgramLogoWhite /></div>
                            <span className="close pr-3" onClick={() => { StoryModelRef.current.style.display = 'none' }}><CloseBtnStory /></span>
                        </div>
                        <div className='In'></div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default StoryModel