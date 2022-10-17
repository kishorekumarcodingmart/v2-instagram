import React, { Component } from 'react'
import {CloseBtn} from '../../Utils/NavbarButton'
import './FollowingModel.css'
import Input from '../Input/Input'

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

export class FollowingModel extends Component {
  render() {
    return (
      <>
        <section className='FollowingModelWrapper'>
            <div className='FollowingModel'>
                <header className='sticky top-0 topNavFollowingModel'>
                    <div className='FollowingModelNav flex align-items-center justify-content-between'>
                        <div className='p-2'><h4>Follwers</h4></div>
                        <div className='p-2 hover'><CloseBtn /></div>
                    </div>
                </header>
                <div className='followingSectionWrapper'>
                    <div className="mytabs" style={{justifyContent : "space-evenly"}} >
                        <Input type="radio" id="tabfree" name="mytabs"  />
                        <label htmlFor="tabfree">People</label>
                        <div className="tab FollwerModelDataWrapper" style={{padding : "4px"}}>
                        <div className='followingSectionList flex-col w-100'>
                            {
                                FollwerModelData.map((val,index)=>{
                                    return(
                                        <div className='flex justify-content-between align-items-center' key={index}>
                                            <div className='flex align-items-center'>
                                                <div><img src={val.imgUrl} className="followimgSectionNavDp mr-2" alt="dp" /></div>
                                                <div>
                                                    <div><h4 className='fs-3'>{val.userName}</h4></div>
                                                    <div><p className='fs-1 text-gray'>{val.Name}</p></div>
                                                </div>
                                            </div>
                                            <div className='pr-2'><button className='FollowingBtn p-2'>Following</button></div>
                                        </div> 
                                    )
                                })
                            }

                        </div>
                    </div>
                        <Input type="radio" id="tabsilver" name="mytabs" />
                        <label htmlFor="tabsilver">Hashtags</label>
                        <div className="tab">
                            <div className='flex flex-col w-100'>

                            <div className='flex justify-content-between align-items-center'>
                                <div className='flex align-items-center'>
                                    <div><img src={"https://instagram-clone-mrkishorekumar.netlify.app/img.png"} className="followimgSectionNavDp mr-2" alt="dp" /></div>
                                    <div>
                                        <div><h4 className='fs-3'>#gadgets</h4></div>
                                        <div><p className='fs-1 text-gray'>4,945,855 posts</p></div>
                                    </div>
                                </div>
                                <div className='mr-2'><button className='FollowingBtn p-2'>Following</button></div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
}

export default FollowingModel