import React, {useState} from 'react'
import './PostSlider.css'
import BtnSlider from './BtnSlider'


function PostSlider({postUrl, height, setLike, like}) {


    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== postUrl.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === postUrl.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(postUrl.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

  return (
    <>
         <div className="container-slider w-100" style={{height :height}}>
            {postUrl.map((obj, index) => {
                return (
                    <div key={index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img src={obj.url} alt="post" onDoubleClick={() => setLike(!like)}/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: postUrl.length}).map((item, index) => (
                    <div key={index} onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                ))}
            </div>
        </div>
    </>
  )
}

export default PostSlider