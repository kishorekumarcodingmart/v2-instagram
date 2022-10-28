import React, { Component } from 'react'
// import Input from '../../Input/Input'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'
import CustomRadioButton from '../../CustomRadioButton/CustomRadioButton'
import './PushNotifications.css'


const obj = [
    {
        id : "a01",
        name : "Likes",
        field : ["off", "From people I follow", "From everyone"],
        describe : "johnappleseed liked your photo."
    },
    {
        id : "a02",
        name : "Likes and comments on photos of you",
        field : ["off", "From people I follow", "From everyone"],
        describe : "johnappleseed commented on a post that you're tagged in."
    },
    {
        id : "a03",
        name : "Comments",
        field : ["off", "From people I follow", "From everyone"],
        describe : 'johnappleseed commented: "Nice shot!"'
    },
    {
        id : "a04",
        name : "Comment likes",
        field : ["off","On"],
        describe : "johnappleseed liked your comment: Nice shot!"
    },
    {
        id : "a05",
        name : "First posts and stories",
        field : ["off", "From people I follow", "From everyone"],
        describe : "See johnappleseed's first story on Instagram and other similar notifications."
    },
    {
        id : "a06",
        name : "New Followers",
        field : ["off","On"],
        describe : "John Appleseed (johnappleseed) started following you."
    },
    {
        id : "a07",
        name : "Accepted follow requests",
        field : ["off","On"],
        describe : "John Appleseed (johnappleseed) accepted your follow request."
    },
    {
        id : "a08",
        name : "Account suggestions",
        field : ["off","On"],
        describe : "johnappleseed, who you might know, is on Instagram, and other similar notifications."
    },
    {
        id : "a09",
        name : "Message requests",
        field : ["off","On"],
        describe : "johnappleseed wants to send you a message."
    },
    {
        id : "a10",
        name : "Messages",
        field : ["off","On"],
        describe : "johnappleseed sent you a message."
    },
    {
        id : "a11",
        name : "Message reminders",
        field : ["off","On"],
        describe : "johnappleseed sent you a message (1d ago)."
    },
    {
        id : "a12",
        name : "Group requests",
        field : ["off","On"],
        describe : "johnappleseed wants to add janeappleseed to your group."
    },
    {
        id : "a13",
        name : "Video chats",
        field : ["off", "From people I follow", "From everyone"],
        describe : "Incoming video chat from johnappleseed."
    },
    {
        id : "a14",
        name : "Rooms",
        field : ["off", "From people I follow", "From everyone"],
        describe : "👋johnappleseed's room starts in 10 minutes."
    },
    {
        id : "a15",
        name : "Live videos",
        field : ["off","On"],
        describe : "johnappleseed started a live video. Watch it before it ends!"
    },
    {
        id : "a16",
        name : "Recently uploaded reels",
        field : ["off","On"],
        describe : "johnappleseed, johndoe and janedoe recently shared new reels."
    },
    {
        id : "a17",
        name : "Most watched reels",
        field : ["off","On"],
        describe : "Take a look at the most watched reels in your location today."
    },
    {
        id : "a18",
        name : "Your fundraisers",
        field : ["off","On"],
        describe : "johnappleseed donated to your fundraiser."
    },
    {
        id : "a19",
        name : "Fundraisers by others",
        field : ["off","On"],
        describe : "johnappleseed started a fundraiser."
    },
    {
        id : "a20",
        name : "Reminders",
        field : ["off","On"],
        describe : "You have unseen notifications and other similar notifications"
    },
    {
        id : "a21",
        name : "Product announcements & feedback",
        field : ["off","On"],
        describe : "Download Boomerang, Instagram's latest app."
    },
    {
        id : "a22",
        name : "Support requests",
        field : ["off","On"],
        describe : "Your support request from July 10 has just been updated."
    },
    {
        id : "a23",
        name : "Unrecognised logins",
        field : ["off","On"],
        describe : "An unrecognised Apple iPhone 11 has logged in from Foster City, CA, USA."
    },
    ];

class FormField extends Component {
    render(){
        return (
            <>
                {
                    obj.map((val,index)=>{
                        return(
                            <div key={val.id}>
                                <div className='mt-3'>
                                    <form className='flex flex-col' >
                                        <h4>{val.name}</h4>
                                        {
                                            val.field.map((vals,indexs)=>{
                                                return(
                                                    <div key={indexs+val.id} className="mt-2">
                                                        <div>
                                                            <div>
                                                                <CustomRadioButton name={val.name} val={vals} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className='mt-3'>
                                            <p className='text-gray fs-3 pb-1'>{val.describe}</p>
                                            {(index!==obj.length-1)?<hr />:null}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}



export default class PushNotifications extends Component {
  render() {
    
    return (
      <section className='PushNotificationsWrapper flex flex-col w-100'>
        <div className='fw-bold'>PushNotifications</div>
        <div className='flex justify-content-between align-items-center mt-3'>
            <div>Pause all</div>
            <div><ToggleSwitch /></div>
        </div>
        <FormField />
      </section>
    )
  }
}
