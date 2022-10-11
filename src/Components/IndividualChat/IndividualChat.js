import React from 'react'
import './IndividualChat.css'
import { Phone, VideoCall, Info, SmileEmoji, ImageIcon,ActivityFeedOff} from '../../Utils/NavbarButton'


function IndividualChat() {
  return (
    <>
        <section className='ChatAppWrapper h-100 flex flex-col 1'>
            <div className='ChatNavbarWrapper w-100 flex justify-content-between align-items-center p-2 sticky top-0'>
                <div className='flex align-items-center gap-2'>
                    <div><img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="IndividualChatDp" alt="dp" /></div>
                    <div>mrkishorekumar</div>
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
                            src={'https://instagram-clone-mrkishorekumar.netlify.app/img.png'} alt="dp" />
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
                            src={'https://instagram-clone-mrkishorekumar.netlify.app/img.png'} alt="dp" />
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
            <div className='ChatTextArea flex justify-content-between align-items-center p-2 m-1 sticky bottom-0 left-0'>
                <div className='flex align-items-center gap-2 py-2'>
                    <div><SmileEmoji /></div>
                    <div><input className='ChatInput' placeholder='Message...'/></div>
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