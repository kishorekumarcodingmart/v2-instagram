import React from 'react'
import './ExplorePostGridSystem.css'
import Reels from '../../Assets/video/reels.mp4'

function ExplorePostGridSystem() {
  return (
    <>
       <section>
            <div className="container1">
                    <div className="Reels">
                        <video className='grid-img' controls autoplay muted loop>
                        <source src={Reels} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="Post-1">
                        <img className='grid-img' src={"https://picsum.photos/300?image=600"} alt="post" />
                    </div>
                    <div className="Post-2">
                        <img className='grid-img' src={"https://picsum.photos/300?image=600"} alt="post" />
                    </div>
                    <div className="Post-3">
                        <img className='grid-img' src={"https://picsum.photos/300?image=600"} alt="post" />
                    </div>
                    <div className="Post-4">
                        <img className='grid-img' src={"https://picsum.photos/300?image=600"} alt="post" />
                    </div>
                </div>

                <div className="container2">
                    <div className="Post-1">
                        <img className='grid-img' src={"https://picsum.photos/300?image=600"} alt="post" />
                    </div>
                    <div className="Post-2">
                        <img className='grid-img' src={"https://picsum.photos/300?image=600"} alt="post" />
                    </div>
                    <div className="Post-3">
                        <img className='grid-img' src={"https://picsum.photos/300?image=600"} alt="post" />
                    </div>
                    <div className="Post-4">
                        <img className='grid-img' src={"https://picsum.photos/300?image=600"} alt="post" />
                    </div>
                    <div className="Reels">
                        <img className='grid-img' src={"https://www.pixelstalk.net/wp-content/uploads/2016/08/1080-x-1920-Image-Vertical-HD.jpg"} alt="post" />
                    </div>
                </div>
       </section>
    </>
  )
}

export default ExplorePostGridSystem