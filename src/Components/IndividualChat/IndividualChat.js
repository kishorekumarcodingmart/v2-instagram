import React from 'react'
import './IndividualChat.css'
import { useSelector } from 'react-redux'
import { Phone, VideoCall, Info, SmileEmoji, ImageIcon,ActivityFeedOff} from '../../Utils/NavbarButton'


function IndividualChat({details}) {

    // const details = {
    //     imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     userName : "infantilelook",
    // }

  const theme = useSelector((state)=>state.theme.data.dark)


  return (
    <>
        <section className='ChatAppWrapper vh-90 flex flex-col 1'>
            <div className={theme?"drak-border-bottom drak-head ChatNavbarWrapper w-100 flex justify-content-between align-items-center p-2 sticky top-0":"ChatNavbarWrapper w-100 flex justify-content-between align-items-center p-2 sticky top-0"}>
                <div className='flex align-items-center gap-2'>
                    <div><img src={details.imgUrl} className="IndividualChatDp" alt="dp" /></div>
                    <div>{details.userName}</div>
                </div>
                <div className='flex align-items-center gap-3'>
                    <Phone />
                    <VideoCall />
                    <Info />
                </div>
            </div>
            <div className='ChatArea px-2'>
                <div className="base-container">
                    <div className="friend-text-div">
                        <img
                            src={details.imgUrl} alt="dp" />
                        <div className="friend-text-container">
                            <div className="friend-text">Yay!</div>
                            <div className="friend-text">You should get a new laptop keyboard cover</div>
                            <div className="friend-text">Yay!</div>
                        </div>
                    </div>
                    <div className="my-text-div">
                        <div className="my-text-container">
                            <div className="my-text">Yeah</div>
                            <div className="my-text">You are right</div>
                            <div className="my-text">Maybe tomorrow</div>
                        </div>
                    </div>
                    <div className="friend-text-div">
                        <img
                            src={details.imgUrl} alt="dp" />
                        <div className="friend-text-container">
                            <div className="friend-text">Yay!</div>
                            <div className="friend-text">You should get a new laptop keyboard cover</div>
                            <div className="friend-text">Yay!</div>
                        </div>
                    </div>
                    <div className="my-text-div">
                        <div className="my-text-container">
                            <div className="my-text">Yeah</div>
                            <div className="my-text">You are right</div>
                            <div className="my-text">Maybe tomorrow</div>
                            <div className="my-text">Yeah</div>
                            <div className="my-text">You are right</div>
                            <div className="my-text">Maybe tomorrow</div>
                            <div className="my-text">Yeah</div>
                            <div className="my-text">You are right</div>
                            <div className="my-text">Maybe tomorrow</div>
                            <div className="my-text">Yeah</div>
                            <div className="my-text">You are right</div>
                            <div className="my-text">Maybe tomorrow</div>
                            <div className="my-text">Yeah</div>
                            <div className="my-text">You are right</div>
                            <div className="my-text">Maybe tomorrow</div>
                            <div className="my-text">Yeah</div>
                            <div className="my-text">You are right</div>
                            <div className="my-text">Maybe tomorrow</div>
                            <div className="my-text">Yeah</div>
                            <div className="my-text">You are right</div>
                            <div className="my-text">Maybe tomorrow</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={theme?"drak-body drak-border ChatTextArea flex justify-content-between align-items-center p-2 m-1 sticky bottom-0 left-0":'ChatTextArea flex justify-content-between align-items-center p-2 m-1 sticky bottom-0 left-0'}>
                <div className='flex align-items-center gap-2 py-2'>
                    <div><SmileEmoji /></div>
                    <div><input className={theme?"drak-body ChatInput":"ChatInput"} placeholder='Message...'/></div>
                </div>
                <div className='flex align-items-center gap-2 py-2'>
                    <div><ImageIcon /></div>
                    <div><ActivityFeedOff /></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default IndividualChat