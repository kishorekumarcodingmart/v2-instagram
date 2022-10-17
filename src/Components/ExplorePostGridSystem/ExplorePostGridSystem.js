import React from 'react'
import './ExplorePostGridSystem.css'
import LoginSignupFooter from '../LoginSignupFooter/LoginSignupFooter'
// import Reels from '../../Assets/video/reels.mp4'

const Explorelist = [
    [
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1608506436795-af65d01305bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1573541685170-ab9580ca12c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1626745844804-bf833f5838e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1553875039-011cd517d6a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1604041679865-a506e0e30ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1532360007308-dae5348c77c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/flagged/photo-1553875039-4da1e0d2fffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1598586958772-8bf368215c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    [
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1608506436795-af65d01305bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1573541685170-ab9580ca12c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1626745844804-bf833f5838e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1553875039-011cd517d6a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1604041679865-a506e0e30ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1532360007308-dae5348c77c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/flagged/photo-1553875039-4da1e0d2fffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1598586958772-8bf368215c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    ],

]


function ExplorePostGridSystem() {
  return (
    <>
        {
            Explorelist.map((val,index)=>{
                return(
                    <section key={index}>
                        <div className="container1">
                            <div className="Reels">
                                <img className='grid-img' src={val[0]} alt="post" />

                                {/* <video className='grid-img' controls autoPlay muted loop>
                                    <source src={Reels} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video> */}
                            </div>
                            <div className="Post-1">
                                <img className='grid-img' src={val[1]} alt="post" />
                            </div>
                            <div className="Post-2">
                                <img className='grid-img' src={val[2]} alt="post" />
                            </div>
                            <div className="Post-3">
                                <img className='grid-img' src={val[3]} alt="post" />
                            </div>
                            <div className="Post-4">
                                <img className='grid-img' src={val[4]} alt="post" />
                            </div>
                        </div>

                        <div className="container2">
                            <div className="Post-1">
                                <img className='grid-img' src={val[5]} alt="post" />
                            </div>
                            <div className="Post-2">
                                <img className='grid-img' src={val[6]} alt="post" />
                            </div>
                            <div className="Post-3">
                                <img className='grid-img' src={val[7]} alt="post" />
                            </div>
                            <div className="Post-4">
                                <img className='grid-img' src={val[8]} alt="post" />
                            </div>
                            <div className="Reels">
                                <img className='grid-img' src={val[9]} alt="post" />
                            </div>
                        </div>
                </section>
                )
            })
        }
        <LoginSignupFooter />
    </>
  )
}

export default ExplorePostGridSystem