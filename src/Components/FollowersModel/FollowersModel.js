import React, { Component } from 'react'
import {CloseBtn} from '../../Utils/NavbarButton'
import './FollowersModel.css'

const FollwerModelData = [
    {
        imgUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        Name : "M R Kishore Kumar"
    },
    {
        imgUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        Name : "M R Kishore Kumar"
    },
    {
        imgUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        Name : "M R Kishore Kumar"
    },
    {
        imgUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        Name : "M R Kishore Kumar"
    },
    {
        imgUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        Name : "M R Kishore Kumar"
    },
    {
        imgUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        Name : "M R Kishore Kumar"
    },
    {
        imgUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        Name : "M R Kishore Kumar"
    },
    {
        imgUrl : "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
        userName : "mrkishorekumar",
        Name : "M R Kishore Kumar"
    },
]

export class FollowersModel extends Component {
  render() {
    return (
      <>
        <section className='FollowersModelWrapper'>
            <div className='FollowersModel w-100 flex flex-col'>
                <header className='sticky top-0 topNavFollowersModel'>
                    <div className='FollowersModelNav flex align-items-center justify-content-between'>
                        <div className='p-2'><h4>Follwers</h4></div>
                        <div className='p-2 hover'><CloseBtn /></div>
                    </div>
                </header>
                <div className='individualShareFollwerWrapper flex flex-col w-100'>

                    {
                        FollwerModelData.map((val,index)=>{
                            return(
                                <div key={index} className='individualShareFollwerSuggested flex justify-content-between align-items-center p-2'>
                                    <div className='flex align-items-center'>
                                        <div><img src={val.imgUrl} className="follwerSectionNavDp mr-2" alt="dp" /></div>
                                        <div>
                                            <div><h4 className='fs-3'>{val.userName}</h4></div>
                                            <div><p className='fs-1 text-gray'>{val.Name}</p></div>
                                        </div>
                                    </div>
                                    <div className='pr-2'><button className='removeBtn p-2'>Remove</button></div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
      </>
    )
  }
}

export default FollowersModel