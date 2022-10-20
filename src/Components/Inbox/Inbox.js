import React, { useState } from 'react'
import './Inbox.css'
import {MessageBig, NewChat, DownArrowIcon} from '../../Utils/NavbarButton'
import IndividualChat from '../IndividualChat/IndividualChat'
import LoginSignupFooter from '../LoginSignupFooter/LoginSignupFooter'
// import {WindowDimensions} from '../../Helper/Window'

const MsgData = [
    {
        imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userName : "infantilelook",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userName : "attenddecor",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "homelymeaning",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        userName : "sparklerlost",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "translatedictionary",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=551&q=80",
        userName : "knowncelebrate",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1530577197743-7adf14294584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "developingdemocrat",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1617157435664-4a596993ed2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "earsterritory",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1551625864-3e291c567ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "velcroalthough",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1612041720569-7e67f4061729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "forecastconstitute",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1653753587071-dc0d8ad29717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "establishpipe",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1661399993686-5a84468d8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwb3J0cmFpdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "moonrakerdue",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1560329072-17f59dcd30a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxwb3J0cmFpdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "kaabauniverse",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1562783530-df27356a200d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxwb3J0cmFpdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "burdenfactor",
        msg : "Hello",
        timeStamp : "1 hr ago"
    },

]

function Inbox() {

    const [msg, setMsg] = useState({})
    // console.log(WindowDimensions().width)
    const chatPage = (val) => {
        setMsg(val);
    }

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
                                    <div className='individualChat flex align-items-center w-100 gap-2 w-100' key={index} onClick={()=>chatPage(val)}>
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
                    ):<div className='mobileIndchat w-100'>{<IndividualChat details={msg}/>}</div>
                }
                
            </div>
        </section>
        <LoginSignupFooter />
    </>
  )
}

export default Inbox