import React from 'react'
import './CommentSection.css'
import {MoreOption,ActivityFeedOff,Comment,SharePost, PostSave, SmileEmoji} from '../../Utils/NavbarButton'

function CommentSection() {
  return (
    <>
        <section className='CommentModalPopup'>
            <div className='commentModal flex'>
                <div className='commentPost'>
                    <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} alt="dp" />
                </div>
                <div className='commentSection flex flex-col w-100 relative'>
                    <div className='commentSectionNav flex justify-content-between align-items-center w-100 p-2 sticky top-0'>
                        <div className='flex align-items-center py-2 mt-2'>
                            <div><img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="commentSectionNavDp mr-2" alt="dp" /></div>
                            <div className='fw-bold'>mrkishorekumar</div>
                        </div>
                        <div className='py-2'><MoreOption /></div>
                    </div>
                    <div className='CommentList w-100 flex flex-col p-2'>
                        <div className='py-2 mt-2 flex align-items-center' >
                            <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="commentSectionNavDp mr-2" alt="dp" />
                            <div>
                                <div className='fw-bold'>mrkishorekumar</div>
                                <div className=''><p className='fs-3'>Never sacrifice three things: family, love, and or yourself.</p></div>
                                <div className='fs-1 text-gray'>6 w</div>
                            </div>
                        </div>

                        <div className='py-2 mt-2 flex align-items-center' >
                            <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="commentSectionNavDp mr-2" alt="dp" />
                            <div>
                                <div className='fw-bold'>mrkishorekumar</div>
                                <div className=''><p className='fs-3'>Never sacrifice three things: family, love, and or yourself.</p></div>
                                <div className='fs-1 text-gray'>6 w</div>
                            </div>
                        </div><div className='py-2 mt-2 flex align-items-center' >
                            <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="commentSectionNavDp mr-2" alt="dp" />
                            <div>
                                <div className='fw-bold'>mrkishorekumar</div>
                                <div className=''><p className='fs-3'>Never sacrifice three things: family, love, and or yourself.</p></div>
                                <div className='fs-1 text-gray'>6 w</div>
                            </div>
                        </div><div className='py-2 mt-2 flex align-items-center' >
                            <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="commentSectionNavDp mr-2" alt="dp" />
                            <div>
                                <div className='fw-bold'>mrkishorekumar</div>
                                <div className=''><p className='fs-3'>Never sacrifice three things: family, love, and or yourself.</p></div>
                                <div className='fs-1 text-gray'>6 w</div>
                            </div>
                        </div><div className='py-2 mt-2 flex align-items-center' >
                            <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="commentSectionNavDp mr-2" alt="dp" />
                            <div>
                                <div className='fw-bold'>mrkishorekumar</div>
                                <div className=''><p className='fs-3'>Never sacrifice three things: family, love, and or yourself.</p></div>
                                <div className='fs-1 text-gray'>6 w</div>
                            </div>
                        </div>
                        <div className='py-2 mt-2 flex align-items-center' >
                            <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="commentSectionNavDp mr-2" alt="dp" />
                            <div>
                                <div className='fw-bold'>mrkishorekumar</div>
                                <div className=''><p className='fs-3'>Never sacrifice three things: family, love, and or yourself.</p></div>
                                <div className='fs-1 text-gray'>6 w</div>
                            </div>
                        </div>
                        <div className='py-2 mt-2 flex align-items-center' >
                            <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="commentSectionNavDp mr-2" alt="dp" />
                            <div>
                                <div className='fw-bold'>mrkishorekumar</div>
                                <div className=''><p className='fs-3'>Never sacrifice three things: family, love, and or yourself.</p></div>
                                <div className='fs-1 text-gray'>6 w</div>
                            </div>
                        </div>
                            
                    </div>
                    <div className='border-footer-comment w-100 pt-2 absolute bottom-0 left-0'>
                        <div className='w-100 flex justify-content-between'>
                            <div className='flex gap-3 pl-2'>
                                <ActivityFeedOff />
                                <Comment />
                                <SharePost />
                            </div>
                            <div className='pr-2'>
                                <PostSave />
                            </div>
                        </div>
                        <div className='fw-fold fs-3 pl-2 px-2'>388 likes</div>
                        <div className='text-gray fs-2 pl-2 pb-3'>2 HOURS AGO</div>
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