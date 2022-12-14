import React, { useState } from 'react'
import './IndividualPost.css'
import LazyLoading from '../LazyLoading/LazyLoading'
import PostSlider from '../PostSlider/PostSlider'
import { ActivityFeedOff, Comment, SharePost, PostSave, SmileEmoji, RedLiked, MoreOption } from '../../Utils/NavbarButton'
import MoreOptionPopUp from '../MoreOptionPopUp/MoreOptionPopUp'
import CommentSection from '../CommentSection/CommentSection'
import ShareModal from '../ShareModal/ShareModal'

function IndividualPost({theme, profilePhoto, postUrl, likes, username, description, commentCount, timeStamp, multiPost, loading }) {

    const [like, setLike] = useState(false)

    const [optionModal, setOptionModel] = useState("")

    const [commentModal, setCommentModal] = useState("")

    const [shareModal, setShareModal] = useState("")

    const openModel = (e) => {
        setOptionModel(e.current)
    }

    const openComment = (e) => {
        setCommentModal(e.current)
    }

    const openShare = (e) => {
        setShareModal(e.current)
    }


    return (
        <>
            <div className={theme?"drak-head drak-border individual-post":"individual-post"}>
                <div className={theme?"post-header":"post-header"}>
                    <div className="photo-username">
                        {
                            (loading)?(<><LazyLoading classN="photoLazyLoading" /><LazyLoading classN="postLazyUsername" /></>):(<><img src={profilePhoto} alt="dp" /><div className='pl-2 lowercase'>{username}</div></>)
                        }
                        
                    </div>
                    {
                        (loading)?null:<div className="more-option hover" onClick={() => { optionModal.style.display = "flex" }}><MoreOption/></div>
                    }
                    
                </div>
                <div className={theme?"drak-border-top post-img":"post-img"} >
                    {/* Single Post */}
                    {
                        (loading)?<LazyLoading classN="postImgLazyLoading"/>:!multiPost && <img src={postUrl} alt="post" onDoubleClick={() => setLike(!like)}/>  
                    }
                    
                    {/* Multi Post */}
                    {
                        (loading)?<LazyLoading classN="postImgLazyLoading"/>:multiPost && <PostSlider postUrl={postUrl} height="400px" setLike={setLike} like={like}/>
                    }
                </div>
                {
                    (loading)?null:(
                        <>
                        <div className="like-comment-share-save">
                            <div className="like-comment-share hover">
                                <div onClick={() => setLike(!like)}>
                                    {like ? <RedLiked /> : <ActivityFeedOff />}
                                </div>
                                <div className='hover' onClick={() => { commentModal.style.display = "flex" }}><Comment /></div>
                                <div className='hover' onClick={() => { shareModal.style.display = "flex" }}><SharePost /></div>
                            </div>
                            <div className="save hover">
                                <div><PostSave /></div>
                            </div>
                        </div>
                        <div className="other-likes">{likes} likes</div>
                        <div className="other-description"><span>{username}</span>{description}</div>
                        <div className="other-viwes">View all {commentCount} comments</div>
                        <div className="other-time">{timeStamp}</div>
                        <div className={theme?"drak-border-top comment-section":"comment-section"}>
                            <div className="icon-input">
                                <div><SmileEmoji /></div>
                                <div><input type="text" className={theme?"drak-head comment-input":"comment-input"} placeholder="Add a Comment..." /></div>
                            </div>
                            <div><input type="button" className="comment-input-button" value="Post" /></div>
                        </div>
                        </>
                    )
                }
            </div>
            <MoreOptionPopUp openModel={openModel} />
            <CommentSection openComment={openComment} imgUrl={postUrl} profilePhoto={profilePhoto} username={username} likes={likes} timeStamp={timeStamp} multiPost={multiPost} setLike={setLike} like={like}/>
            <ShareModal openShare={openShare} theme={theme}/>
        </>
    )
}

export default IndividualPost