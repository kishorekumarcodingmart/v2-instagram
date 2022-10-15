import React, { Component } from 'react'
import {CloseBtn} from '../../Utils/NavbarButton'
import './ShareModal.css'

const ShareModelSend = [
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

export class ShareModal extends Component {
  render() {
    return (
      <>
        <section className='shareModelPopUp'>
            <div className='shareModel w-100 flex flex-col '>
                <header className='sticky top-0 topNavShareModel'>
                    <div className='shareModelNav flex align-items-center justify-content-between'>
                        <div className='p-2'><h4>Share</h4></div>
                        <div className='p-2 hover'><CloseBtn /></div>
                    </div>
                    <div className='shareModelSearch align-items-center flex w-100'>
                        <div className='p-2'><h4>To:</h4></div>
                        <div className='p-2 w-100'><textarea className='p-1 w-100 my-1' placeholder='Search...' rows="1"></textarea></div>
                    </div>
                </header>
                <div className='shareModelSuggested w-100 flex flex-col'>
                    <div className='p-2'><h4>Suggested</h4></div>
                    <div className='flex p-2 flex-col w-100'>
                        

                        {
                            ShareModelSend.map((val,index)=>{
                                return (
                                    <div key={index} className='individualShareModelSuggested flex justify-content-between align-items-center'>
                                        <div className='flex align-items-center'>
                                            <div><img src={val.imgUrl} className="shareSectionNavDp mr-2" alt="dp" /></div>
                                            <div>
                                                <div><h4 className='fs-3'>{val.userName}</h4></div>
                                                <div><p className='fs-1 text-gray'>{val.Name}</p></div>
                                            </div>
                                        </div>
                                        <div className='pr-2'><input type="radio" /></div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className='shareModelFooter w-100 p-2 sticky bottom-0 left-0'>
                    <button className='p-2 w-100 fw-bold hover'>Send</button>
                </div>
            </div>
        </section>
      </>
    )
  }
}

export default ShareModal