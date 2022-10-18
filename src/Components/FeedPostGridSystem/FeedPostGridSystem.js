import React from 'react'
import './FeedPostGridSystem.css'
import { Link } from 'react-router-dom'



function FeedPostGridSystem({postDetails}) {
  return (
    <>
        <section className='postList mt-3 mb-3 w-100'>
            {
                postDetails.map((val,index)=>{
                    return (
                        <Link key={index} className='individualPostLink' to="">
                        <figure className="post-image">
                            <img src={val.postImg} alt="Post" />
                            </figure>
                            <span className="post-overlay">
                            <p className='flex gap-2'>
                                <span className="post-likes fw-bold">{val.postLinks}</span>
                                <span className="post-comments fw-bold">{val.postComments}</span>
                            </p>
                            </span>
                        </Link>
                    )
                })
            }

            
        </section>
    </>
  )
}

export default FeedPostGridSystem