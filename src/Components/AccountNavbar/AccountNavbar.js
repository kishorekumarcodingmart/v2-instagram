import React, { useState } from 'react'
import './AccountNavbar.css'
import FeedPostGridSystem from '../FeedPostGridSystem/FeedPostGridSystem'
import {PostGrid, Tagged, Saved} from '../../Utils/NavbarButton'


const post = [
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
  
]


const saved = [
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
}

]


const tagged = [{
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
}]

function AccountNavbar() {

  const [tabs, setTabs] = useState(0)

  return (
    <>
        <div className="desktop-only">
            <div className="tabs">
                <div style={{marginRight: "60px"}} className={(tabs===0)?"tab-item hover active":"tab-item hover"} onClick={()=>{setTabs(0)}}>
                    <PostGrid />
                    <span>POSTS</span>
                </div>
                <div className={(tabs===1)?"tab-item hover active":"tab-item hover"} style={{marginRight: "60px"}} onClick={()=>{setTabs(1)}}>
                    <Saved />
                    <span>SAVED</span>
                </div>
                <div className={(tabs===2)?"tab-item hover active":"tab-item hover"} onClick={()=>{setTabs(2)}}>
                    <Tagged />
                    <span>TAGGED</span>
                </div>
            </div>
        </div>
        {/* Mobile */}
        <div className="mobile-tabs mobile-only">

        <div className="actions">
          <div  className={(tabs===0)?"tab-item hover":"tab-item hover"} onClick={()=>{setTabs(0)}}>
            <PostGrid />
          </div>
          <div className={(tabs===1)?"tab-item hover":"tab-item hover"} onClick={()=>{setTabs(1)}}>
            <Tagged />
          </div>
          <div className={(tabs===2)?"tab-item hover":"tab-item hover"} onClick={()=>{setTabs(2)}}>
            <Saved />
          </div>
        </div>
      </div>

      {
        (tabs===0)?<FeedPostGridSystem postDetails={post}/>:(tabs===1)?<FeedPostGridSystem postDetails={saved} />:<FeedPostGridSystem postDetails={tagged} />
      }
    </>
  )
}

export default AccountNavbar