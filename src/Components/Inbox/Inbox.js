import React, { useState } from 'react'
import './Inbox.css'
import {MessageBig, NewChat, DownArrowIcon} from '../../Utils/NavbarButton'
import IndividualChat from '../IndividualChat/IndividualChat'

const MsgData = [
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },

]

function Inbox() {

    const [msg, setMsg] = useState({})

  return (
    <>
        <section className='InboxWrapperDesktop flex justify-content-center align-items-center w-100 1'>
            <div className='ChatMobileDesktop flex w-100 2'>
                <div className='chatbox 3'>
                    <div className='UsernameChatDesktop 4 flex justify-content-center align-items-center gap-3 p-2'>
                        <div className=''><h4>mrkishorekumar</h4></div>
                        <div className='downArrow '><DownArrowIcon /></div>
                        <div className=''><NewChat /></div>
                    </div>
                    <div className='individualChatWrapper 5'>

                        {
                            MsgData.map((val,index)=>{
                                return(
                                    <div className='individualChat flex align-items-center w-100 gap-2 w-100' key={index} onClick={()=>setMsg(val)}>
                                        <div><img src={val.imgUrl} className="chatDp" alt="dp" /></div>
                                        <div>
                                            <p className='mb-2 fw-bold'>{val.userName}</p>
                                            <div className='text-gray flex gap-2'><p>{val.msg}</p> · <p>{val.timeStamp}</p></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    (Object.keys(msg).length === 0)?(
                        <div className='chatboxInv flex flex-col justify-content-center align-items-center 4'>
                            <div className='NothingNewMsg flex flex-col justify-content-center align-items-center text-center  5'>
                                <div className='m-2'><MessageBig /></div>
                                <div className='m-2'><h2>Your messages</h2></div>
                                <div className='m-2'><p className='text-gray'>Send private photos and messages to a friend or group.</p></div>
                                <div className='m-2'><button className='p-2 '>Send message</button></div>
                            </div>
                        </div>
                    ):<div className='w-100'>{<IndividualChat />}</div>
                }
                
            </div>
        </section>
    </>
  )
}

export default Inbox