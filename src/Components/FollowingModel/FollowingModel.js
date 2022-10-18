import React, { Component, createRef } from 'react'
import {CloseBtn} from '../../Utils/NavbarButton'
import './FollowingModel.css'


const People = [
    {
        imgUrl : "https://images.unsplash.com/photo-1608494603682-913a9e8abee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "fortunecauldron",
        Name : "Terrell Williamson"
    },
    {
        imgUrl : "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "modeset",
        Name : "Gertrude Dunn"
    },
    {
        imgUrl : "https://images.unsplash.com/photo-1504438878808-ee48579f0f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "livelead",
        Name : "Jeanne Rodriguez"
    },
    {
        imgUrl : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "properlylegal",
        Name : "Merle Turner"
    },
    {
        imgUrl : "https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "gathercape",
        Name : "Tina Barnes"
    },
    {
        imgUrl : "https://images.unsplash.com/photo-1657721009401-3d8ce2e6517b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "awarenesspoised",
        Name : "Jonathon Erickson"
    },
    {
        imgUrl : "https://images.unsplash.com/photo-1630265947548-994d8bf4d895?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "handleworking",
        Name : "Ross Wade"
    },
    {
        imgUrl : "https://images.unsplash.com/photo-1659294090771-790656b63ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG1lbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
        userName : "whitenessconsider",
        Name : "Kelli Lawson"
    },
]

const hashtag = [
    {
        imgUrl : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320/lsci/db/PICTURES/CMS/319900/319946.png",
        userName : "#msdhoni",
        Name : "5,155,474 posts"
    },
    {
        imgUrl : "https://images.unsplash.com/photo-1608506436795-af65d01305bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "#car",
        Name : "93,387,097 posts"
    },
]

export class FollowingModel extends Component {

  constructor(props){
    super(props)
    this.state = {sectionNav : 0}
    this.FollowingModalRef = createRef();
  }

  componentDidMount(){
    this.props.openModel(this.FollowingModalRef)
}

  render() {
    return (
      <>
        <section className='FollowingModelWrapper' ref={this.FollowingModalRef}>
            <div className='FollowingModel'>
                <header className='sticky top-0 topNavFollowingModel'>
                    <div className='FollowingModelNav flex align-items-center justify-content-between'>
                        <div className='p-2'><h4>Following</h4></div>
                        <div className='p-2 hover' onClick={() => { this.FollowingModalRef.current.style.display = "none" }}><CloseBtn /></div>
                    </div>
                    <div className='flex justify-content-evenly p-2 fw-bold'>
                        <div className='hover text-blue' onClick={()=>{this.setState({...this.state, sectionNav : 0 })}}>People</div>
                        <div className='hover text-blue' onClick={()=>{this.setState({...this.state, sectionNav : 1 })}}>Hashtags</div>
                    </div>
                </header>
                <div className='individualShareFollowingWrapper flex flex-col w-100 '>
                        
                        {
                            (this.state.sectionNav===0)?(
                                People.map((val,index)=>{
                                    return(
                                        <div key={index} className='individualShareFollwerSuggested flex justify-content-between align-items-center p-2'>
                                            <div className='flex align-items-center'>
                                                <div><img src={val.imgUrl} className="follwerSectionNavDp mr-2" alt="dp" /></div>
                                                <div>
                                                    <div><h4 className='fs-3'>{val.userName}</h4></div>
                                                    <div><p className='text-gray'>{val.Name}</p></div>
                                                </div>
                                            </div>
                                            <div className='pr-2'><button className='removeBtn p-2'>Following</button></div>
                                        </div>
                                    )
                                })
                            ):(
                                hashtag.map((val,index)=>{
                                    return(
                                        <div key={index} className='individualShareFollwerSuggested flex justify-content-between align-items-center p-2'>
                                            <div className='flex align-items-center'>
                                                <div><img src={val.imgUrl} className="follwerSectionNavDp mr-2" alt="dp" /></div>
                                                <div>
                                                    <div><h4 className='fs-3'>{val.userName}</h4></div>
                                                    <div><p className='text-gray'>{val.Name}</p></div>
                                                </div>
                                            </div>
                                            <div className='pr-2'><button className='removeBtn p-2'>Following</button></div>
                                        </div>
                                    )
                                })
                            )
                        }

                    </div>
            </div>
        </section>
      </>
    )
  }
}

export default FollowingModel