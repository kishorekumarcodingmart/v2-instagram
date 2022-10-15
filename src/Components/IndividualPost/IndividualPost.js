import React, { useState } from 'react'
import './IndividualPost.css'
import PostSlider from '../PostSlider/PostSlider'
import { ActivityFeedOff, Comment, SharePost, PostSave, SmileEmoji, RedLiked, MoreOption } from '../../Utils/NavbarButton'
import MoreOptionPopUp from '../MoreOptionPopUp/MoreOptionPopUp'
import CommentSection from '../CommentSection/CommentSection'

function IndividualPost({ postUrl, likes, username, description, commentCount, timeStamp }) {

    const [like, setLike] = useState(false)

    const [optionModal, setOptionModel] = useState("")

    const [commentModal, setCommentModal] = useState("")

    const openModel = (e) => {
        setOptionModel(e.current)
    }

    const openComment = (e) => {
        setCommentModal(e.current)
    }


    return (
        <>
            <div className="individual-post">
                <div className="post-header">
                    <div className="photo-username">
                        <img src={postUrl} alt="dp" />
                        <div>mrkishore</div>
                    </div>
                    <div className="more-option hover" onClick={() => { optionModal.style.display = "flex" }}><MoreOption/></div>
                </div>
                <div className="post-img" onDoubleClick={() => setLike(!like)}>
                    {/* Single Post */}
                    {/* <img src={postUrl} alt="post" />   */}
                    {/* Multi Post */}
                    <PostSlider />
                </div>
                <div className="like-comment-share-save">
                    <div className="like-comment-share hover">
                        <div onClick={() => setLike(!like)}>
                            {like ? <RedLiked /> : <ActivityFeedOff />}
                        </div>
                        <div className='hover' onClick={() => { commentModal.style.display = "flex" }}><Comment /></div>
                        <div className='hover'><SharePost /></div>
                    </div>
                    <div className="save hover">
                        <div><PostSave /></div>
                    </div>
                </div>
                <div className="other-likes">{likes} likes</div>
                <div className="other-description"><span>{username}</span>{description}</div>
                <div className="other-viwes">View all {commentCount} comments</div>
                <div className="other-time">{timeStamp}</div>
                <div className="comment-section">
                    <div className="icon-input">
                        <div><SmileEmoji /></div>
                        <div><input type="text" className="comment-input" placeholder="Add a Comment..." /></div>
                    </div>
                    <div><input type="button" className="comment-input-button" value="Post" /></div>
                </div>
            </div>
            <MoreOptionPopUp openModel={openModel} />
            <CommentSection openComment={openComment}/>
        </>
    )
}

export default IndividualPost