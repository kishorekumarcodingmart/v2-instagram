import React, { useState } from 'react'
import './FeedSection.css'
import { Link } from 'react-router-dom'
import IndividualStory from '../IndividualStory/IndividualStory'
import IndividualPost from '../IndividualPost/IndividualPost'
import SuggestionAccount from '../SuggestionAccount/SuggestionAccount'
import {feedFooeterLinkList} from '../../Utils/Const'
import StoryModel from '../StoryModel/StoryModel'



const post = [
    {
        multiPost : false,
        profilePhoto : "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        postUrl : "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        likes : "404",
        username : "satisfyingson",
        description : "Never sacrifice three things: family, love, and or yourself.",
        commentCount : "3",
        timeStamp : "1 Day Ago"
    },
    {
        multiPost : true,
        profilePhoto : "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        postUrl : [{url: "https://images.unsplash.com/photo-1543523195-e0613799d7ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},{url: "https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}],
        likes : "404",
        username : "raftingscroll",
        description : "Never sacrifice three things: family, love, and or yourself.",
        commentCount : "3",
        timeStamp : "1 Day Ago"
    },
    {
        multiPost : false,
        profilePhoto : "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        postUrl : "https://images.unsplash.com/photo-1483995564125-85915c11dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        likes : "404",
        username : "magicauthentic",
        description : "Never sacrifice three things: family, love, and or yourself.",
        commentCount : "3",
        timeStamp : "1 Day Ago"
    },
    {
        multiPost : true,
        profilePhoto : "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        postUrl : [{url: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"},{url: "https://images.unsplash.com/photo-1528271537-64e11fc31bba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"}],
        likes : "404",
        username : "writerfascinated",
        description : "Never sacrifice three things: family, love, and or yourself.",
        commentCount : "3",
        timeStamp : "1 Day Ago"
    },
]


function FeedSection({postSection,profile,storiesSection,suggestionSection}) {
    console.log(postSection)
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
                        storiesSection.map((val)=>{
                            return (<IndividualStory key={val.userId} img={val.profilePicUrl} username={val.profileUserName} onClickFunc={onClickFunc}/>)
                        })
                    }
                </div>
                <div className="post-setion-wrapper">
                    {
                        post.map((val,index)=>{
                            return(<IndividualPost key={index} postUrl={val.postUrl} likes={val.likes} username={val.username} description={val.description} commentCount={val.commentCount} timeStamp={val.timeStamp} multiPost={val.multiPost} profilePhoto={val.profilePhoto} />)
                        })
                    }
                </div>
            
            </div>
            <div className="right-col">
                <div className="suggestion-section-wrapper">
                    <div className="profile-details">
                        <div className="username-name-profile">
                            <div className="suggestion-section-photo">
                                <img src={profile.profilePicUrl} alt="img" /></div>
                            <div className="username-name">
                                <h5>{profile.profileUserName}</h5>
                                <p>{profile.profileName}</p>
                            </div>
                        </div>
                        <div className="follow">Switch</div>
                    </div>
                    <div className="suggestion-title">
                        <h5>Suggestions for you</h5>
                        <p>See All</p>
                    </div>

                    {
                        suggestionSection.map((val,index)=>{
                            return (<SuggestionAccount key={index} profilePhoto={val.profilePicUrl} name={val.profileName} userName={val.profileUserName}/>)
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