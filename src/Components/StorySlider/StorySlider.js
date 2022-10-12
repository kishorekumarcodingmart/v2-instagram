import React,{useState} from 'react'
import './StorySlider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import ProgressBar from '../ProgressBar/ProgressBar'
import {LikeOutline,ShareOutline} from '../../Utils/NavbarButton'

function StorySlider() {
    const [slideStoryIndex, setStorySlideStoryIndex] = useState(1)

    const nextSlide = () => {
        if(slideStoryIndex !== dataSlider.length){
            setStorySlideStoryIndex(slideStoryIndex + 1)
        } 
        else if (slideStoryIndex === dataSlider.length){
            setStorySlideStoryIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideStoryIndex !== 1){
            setStorySlideStoryIndex(slideStoryIndex - 1)
        }
        else if (slideStoryIndex === 1){
            setStorySlideStoryIndex(dataSlider.length)
        }
    }


  return (
    <>
         <div className="container-slider-story w-100">
            {dataSlider.map((obj, index) => {
                return (
                    <div key={index} className={slideStoryIndex === index + 1 ? "slide active-anim" : "slide"} id="mobileCenter">
                        <div style={{backgroundImage : `url(${obj.storyUrl})`}} className="storyView">
                            <div className='p-2'><ProgressBar /></div>
                            <div className='flex align-items-center'>
                                <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"}  id="storyDp" alt="dp" className='py-2' />
                                <div className='text-white fw-bold'>mrkishorekumar</div>
                                <div className='text-gray py-2'>1 hr</div>
                            </div>
                            <div className='storyFooter p-1 flex justify-content-between align-items-center'>
                                <div><input type="text" className='storyReply' placeholder='Reply'/></div>
                                <div className='flex gap-2 align-items-center'>
                                    <div><LikeOutline /></div>
                                    <div><ShareOutline /></div>
                                </div>
                            </div>
                        </div>
                        {/* <img src={obj.storyUrl} alt="post" /> */}
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        </div>
    </>
  )
}

export default StorySlider