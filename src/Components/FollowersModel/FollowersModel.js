import React, { Component, createRef } from 'react'
import {CloseBtn} from '../../Utils/NavbarButton'
import './FollowersModel.css'

const FollwerModelData = [
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

export class FollowersModel extends Component {
  
    constructor(props){
        super(props);
        this.FollowerModalRef = createRef();
    }

    componentDidMount(){
        this.props.openModel(this.FollowerModalRef)
    }

  render() {
    return (
      <>
        <section className='FollowersModelWrapper' ref={this.FollowerModalRef}>
            <div className='FollowersModel w-100 flex flex-col'>
                <header className='sticky top-0 topNavFollowersModel'>
                    <div className='FollowersModelNav flex align-items-center justify-content-between'>
                        <div className='p-2'><h4>Follwers</h4></div>
                        <div className='p-2 hover'  onClick={() => { this.FollowerModalRef.current.style.display = "none" }}><CloseBtn /></div>
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
                                            <div><p className='text-gray'>{val.Name}</p></div>
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