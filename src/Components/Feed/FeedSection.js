import React, { useState } from 'react'
import './FeedSection.css'
import { Link } from 'react-router-dom'
import IndividualStory from '../IndividualStory/IndividualStory'
import IndividualPost from '../IndividualPost/IndividualPost'
import SuggestionAccount from '../SuggestionAccount/SuggestionAccount'
import {feedFooeterLinkList} from '../../Utils/Const'
import StoryModel from '../StoryModel/StoryModel'

const story = [
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishore Kumar"
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishore Kumar"
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishore Kumar"
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishore Kumar"
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishore Kumar"
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishore Kumar"
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishore Kumar"
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishore Kumar"
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishore Kumar"
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishore Kumar"
    },
]

const post = [
    {
        postUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        likes : "404",
        username : "mrkishorekumar",
        description : "Never sacrifice three things: family, love, and or yourself.",
        commentCount : "3",
        timeStamp : "1 Day Ago"
    },
    {
        postUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        likes : "404",
        username : "mrkishorekumar",
        description : "Never sacrifice three things: family, love, and or yourself.",
        commentCount : "3",
        timeStamp : "1 Day Ago"
    },
    {
        postUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        likes : "404",
        username : "mrkishorekumar",
        description : "Never sacrifice three things: family, love, and or yourself.",
        commentCount : "3",
        timeStamp : "1 Day Ago"
    },
    {
        postUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        likes : "404",
        username : "mrkishorekumar",
        description : "Never sacrifice three things: family, love, and or yourself.",
        commentCount : "3",
        timeStamp : "1 Day Ago"
    },
]

const suggestion = [
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        name : "mrkishorekumar",
        userName : "M R Kishore Kumar",
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        name : "mrkishorekumar",
        userName : "M R Kishore Kumar",
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        name : "mrkishorekumar",
        userName : "M R Kishore Kumar",
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        name : "mrkishorekumar",
        userName : "M R Kishore Kumar",
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        name : "mrkishorekumar",
        userName : "M R Kishore Kumar",
    },
    {
        profilePhoto : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        name : "mrkishorekumar",
        userName : "M R Kishore Kumar",
    },
]

function FeedSection() {

    const [refState , setRefState] = useState("")

  const StoryModelFunc = (data) => {
    setRefState(data.current)
  }

  const onClickFunc = () => {
    refState.style.display = "flex"
  }

  return (
    <>
    <section className="main-content">
        <div className="grid-system-for-desktop">
            <div className="left-col">
                <div className="story-section-wrapper">
                    {
                        story.map((val,index)=>{
                            return (<IndividualStory key={index} img={val.profilePhoto} username={val.userName} onClickFunc={onClickFunc}/>)
                        })
                    }
                </div>
                <div className="post-setion-wrapper">
                    {
                        post.map((val,index)=>{
                            return(<IndividualPost key={index} postUrl={val.postUrl} likes={val.likes} username={val.username} description={val.description} commentCount={val.commentCount} timeStamp={val.timeStamp} />)
                        })
                    }
                </div>
            
            </div>
            <div className="right-col">
                <div className="suggestion-section-wrapper">
                    <div className="profile-details">
                        <div className="username-name-profile">
                            <div className="suggestion-section-photo">
                                <img src={'https://instagram-clone-mrkishorekumar.netlify.app/img.png'} alt="img" /></div>
                            <div className="username-name">
                                <h5>mrkishorekumar</h5>
                                <p>M R Kishore Kumar</p>
                            </div>
                        </div>
                        <div className="follow">Switch</div>
                    </div>
                    <div className="suggestion-title">
                        <h5>Suggestions for you</h5>
                        <p>See All</p>
                    </div>

                    {
                        suggestion.map((val,index)=>{
                            return (<SuggestionAccount key={index} profilePhoto={val.profilePhoto} name={val.name} userName={val.userName}/>)
                        })
                    }
        
                </div>
                <div className="footer-section-wrapper">
                    <div className="footer-links-list">
                        {
                            feedFooeterLinkList.map((val,index)=>{
                                return (<Link key={index} className='f-link' to={val.link}>{val.linkName}</Link>)
                            })
                        }
                    </div>
                    <div className="footer-copyright">&#169; {new Date().getFullYear()} INSTAGRAM FROM META</div>
                </div>
            </div>
        </div>
    </section>
    <StoryModel StoryModelFunc={StoryModelFunc}/>
    </>
  )
}

export default FeedSection