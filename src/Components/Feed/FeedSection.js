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

const story = [
    {
        profilePhoto : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        userName : "JuliaJacobs"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        userName : "NicholasMarshall"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "JodyUnderwood"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        userName : "JackieMendez"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        userName : "PaulaBurke"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1534119768988-c496213eff76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userName : "AlfredBaldwin"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        userName : "MarciaHart"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userName : "ChesterSantiago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1658932447624-152eaf36cf4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        userName : "HerbertBrooks"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1559582930-bb01987cf4dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=576&q=80",
        userName : "GwendolynStokes"
    },
]

const suggestion = [
    {
        profilePhoto : "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name : "stanleysmith._12",
        userName : "Stanley Smith",
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name : "sb.___12",
        userName : "Samantha Brock",
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name : "__johnwells.111",
        userName : "John Wells",
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name : "Wade0",
        userName : "Jacqueline Wade",
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1563956261547-865a33406922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name : "Kathryn._23",
        userName : "Kathryn Cannon",
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name : "Lewis2Harrington",
        userName : "Lewis Harrington",
    },
]


function FeedSection() {
    // console.log(postSection)
    const [refState , setRefState] = useState("")

    const [loading, setLoading ] = useState(true)

    setTimeout(()=>{
        setLoading(false)
    },1000)
    

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
                <div className="w-100 flex justify-content-center">
                {
                        (loading)?<>
                            <div className="loadingFeed w-100">
                                <div></div> 
                                <div></div> 
                                <div></div> 
                                <div></div> 
                                <div></div> 
                                <div></div> 
                                <div></div> 
                                <div></div> 
                                <div></div>
                                <div></div> 
                                <div></div> 
                                <div></div> 
                                <div></div> 
                                </div>
                        </>:null
                    }
                </div>
                <div className="story-section-wrapper">
                
                    {
                        story.map((val,index)=>{
                            return (<IndividualStory key={index} img={val.profilePhoto} username={val.userName} onClickFunc={onClickFunc} loading={loading}/>)
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
                                <img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} alt="img" /></div>
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
                            return (<SuggestionAccount key={index} profilePhoto={val.profilePhoto} name={val.name} userName={val.userName} loading={loading}/>)
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