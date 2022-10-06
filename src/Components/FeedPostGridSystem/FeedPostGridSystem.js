import React from 'react'
import './FeedPostGridSystem.css'
import { Link } from 'react-router-dom'

const postDetails = [
    {
        postImg : "https://picsum.photos/300?image=600",
        postLinks : "1",
        postComments : "1"
    },
    {
        postImg : "https://picsum.photos/300?image=10",
        postLinks : "2",
        postComments : "2"
    },
    {
        postImg : "https://picsum.photos/300?image=1040",
        postLinks : "3",
        postComments : "3"
    },
    {
        postImg : "https://picsum.photos/300?image=654",
        postLinks : "4",
        postComments : "4"
    },
    {
        postImg : "https://picsum.photos/300?image=559",
        postLinks : "5",
        postComments : "5"
    },
    {
        postImg : "https://picsum.photos/300?image=321",
        postLinks : "6",
        postComments : "6"
    },
    {
        postImg : "https://picsum.photos/300?image=280",
        postLinks : "7",
        postComments : "7"
    },
    {
        postImg : "https://picsum.photos/300?image=555",
        postLinks : "8",
        postComments : "8"
    },
    {
        postImg : "https://picsum.photos/300?image=444",
        postLinks : "9",
        postComments : "9"
    },
    {
        postImg : "https://picsum.photos/300?image=600",
        postLinks : "1",
        postComments : "1"
    },
    {
        postImg : "https://picsum.photos/300?image=10",
        postLinks : "2",
        postComments : "2"
    },
    {
        postImg : "https://picsum.photos/300?image=1040",
        postLinks : "3",
        postComments : "3"
    },
    {
        postImg : "https://picsum.photos/300?image=654",
        postLinks : "4",
        postComments : "4"
    },
    {
        postImg : "https://picsum.photos/300?image=559",
        postLinks : "5",
        postComments : "5"
    },
    {
        postImg : "https://picsum.photos/300?image=321",
        postLinks : "6",
        postComments : "6"
    },
    {
        postImg : "https://picsum.photos/300?image=280",
        postLinks : "7",
        postComments : "7"
    },
    {
        postImg : "https://picsum.photos/300?image=555",
        postLinks : "8",
        postComments : "8"
    },
    {
        postImg : "https://picsum.photos/300?image=444",
        postLinks : "9",
        postComments : "9"
    },
    {
        postImg : "https://picsum.photos/300?image=600",
        postLinks : "1",
        postComments : "1"
    },
    {
        postImg : "https://picsum.photos/300?image=10",
        postLinks : "2",
        postComments : "2"
    },
    {
        postImg : "https://picsum.photos/300?image=1040",
        postLinks : "3",
        postComments : "3"
    },
    {
        postImg : "https://picsum.photos/300?image=654",
        postLinks : "4",
        postComments : "4"
    },
    {
        postImg : "https://picsum.photos/300?image=559",
        postLinks : "5",
        postComments : "5"
    },
    {
        postImg : "https://picsum.photos/300?image=321",
        postLinks : "6",
        postComments : "6"
    },
    {
        postImg : "https://picsum.photos/300?image=280",
        postLinks : "7",
        postComments : "7"
    },
    {
        postImg : "https://picsum.photos/300?image=555",
        postLinks : "8",
        postComments : "8"
    },
    {
        postImg : "https://picsum.photos/300?image=444",
        postLinks : "9",
        postComments : "9"
    },
]

function FeedPostGridSystem() {
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