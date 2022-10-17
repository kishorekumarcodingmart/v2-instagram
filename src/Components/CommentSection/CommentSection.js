import React,  { useEffect, useRef } from 'react'
import './CommentSection.css'
import {RedLiked, ActivityFeedOff,Comment,SharePost, PostSave, SmileEmoji} from '../../Utils/NavbarButton'
import PostSlider from '../PostSlider/PostSlider'

const commmentslist = [
    {
        profilePhoto : "https://images.unsplash.com/photo-1614807547811-4174d3582092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBob3RvfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "chillyarcherfish",
        comment : "Super look!",
        timeStamp : "5 min"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "sowseunless",
        comment : "Cute baby",
        timeStamp : "10 min"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        userName : "afterrely",
        comment : "What a pic yr",
        timeStamp : "30 min"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "mainmasthimself",
        comment : "Cool dude",
        timeStamp : "1 hr"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1606744841792-e92948115a84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "sternwayremaining",
        comment : "Yeah, my bro!",
        timeStamp : "2 hr"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1658932447761-8a59cd02d201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "shortcakelowly",
        comment : "Champion",
        timeStamp : "2 hr"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1542157585-ef20bfcce579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=522&q=80",
        userName : "patroonbend",
        comment : "Pretty good stuff ahhaa",
        timeStamp : "3 hr"
    },
]

function CommentSection({openComment, imgUrl, profilePhoto, username, likes, timeStamp, multiPost, setLike, like}) {

  const ComentModel = useRef()
  useEffect(()=>{
    openComment(ComentModel)
  },[openComment])
  return (
    <>
        <section className='CommentModalPopup' ref={ComentModel} >
            <div className='commentModal flex'>
                <div className='commentPost'>
                    {
                        ((!multiPost )?<img src={imgUrl} alt="dp" /> : <PostSlider postUrl={imgUrl} height="100%"/>)
                    }
                    
                </div>
                <div className='commentSection flex flex-col w-100 relative'>
                    <div className='commentSectionNav flex justify-content-between align-items-center w-100 p-2 sticky top-0'>
                        <div className='flex align-items-center py-2 mt-2'>
                            <div><img src={profilePhoto} className="commentSectionNavDp mr-2" alt="dp" /></div>
                            <div className='fw-bold'>{username}</div>
                        </div>
                        <div className='py-2 hover' onClick={() => { ComentModel.current.style.display = 'none' }}>&times;</div>
                    </div>
    
                    <div className='CommentList flex-grow w-100 flex flex-col p-2'>

                        {
                            commmentslist.map((val,index)=>{
                                return(
                                    <div className='py-2 mt-2 flex align-items-center' key={index}>
                                        <img src={val.profilePhoto} className="commentSectionNavDp mr-2" alt="dp" />
                                        <div>
                                            <div className='fw-bold lowercase'>{val.userName}</div>
                                            <div><p className='commentFont'>{val.comment}</p></div>
                                            <div className='commentFont text-gray'>{val.timeStamp}</div>
                                        </div>
                                    </div>

                                )
                            })
                        }

                        {/* <div className='py-2 mt-2 flex align-items-center' >
                            <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="commentSectionNavDp mr-2" alt="dp" />
                            <div>
                                <div className='fw-bold lowercase'>mrkishorekumar</div>
                                <div className='fw-300'><p className='fs-3'>Never sacrifice three things: family, love, and or yourself.</p></div>
                                <div className='fw-100 text-gray'>6 w</div>
                            </div>
                        </div> */}

                        
                            
                    </div>
                    <div className='border-footer-comment w-100 pt-2  bottom-0 left-0'>
                        <div className='w-100 flex justify-content-between'>
                            <div className='flex gap-3 pl-2'>
                                <div onClick={() => setLike(!like)}>
                                    {like ? <RedLiked /> : <ActivityFeedOff />}
                                </div>  
                                <Comment />
                                <SharePost />
                            </div>
                            <div className='pr-2'>
                                <PostSave />
                            </div>
                        </div>
                        <div className='fw-fold fs-3 pl-2 px-2'>{likes} likes</div>
                        <div className='text-gray fs-2 pl-2 pb-3'>{timeStamp}</div>
                        <div className='inputBorderComment w-100 flex justify-content-between px-2 align-items-center'>
                            <div className='flex gap-3 pl-2 align-items-center'>
                                <SmileEmoji />
                                <input type="text" className='typeCommentPopup p-2' placeholder='Add a Comment...' />
                            </div>
                            <div className='pr-2'>
                                <h5 className='colorBlue hover'>Post</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CommentSection