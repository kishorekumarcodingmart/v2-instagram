import React, {useState, useEffect} from 'react'
import './ExplorePostGridSystem.css'
import LoginSignupFooter from '../LoginSignupFooter/LoginSignupFooter'
import Explorelist from '../../Utils/Explorelist.json'
import { useSelector } from 'react-redux'

function ExplorePostGridSystem() {

  const theme = useSelector((state)=>state.theme.data.dark)


  const rows = 2

  const [post, setPost] = useState([...Explorelist.slice(0,2)])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    console.log(page*rows-rows)
    console.log(page*rows)
    setPost([...Explorelist.slice(0,page*rows)])
  },[page])

  const handlescroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      setPage(prev=>prev+1)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handlescroll)
  },[])

  return (
    <>
        {
            post.map((val,index)=>{
                return(
                    <section key={index} className={theme?"drak-body":""}>
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