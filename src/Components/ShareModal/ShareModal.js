import React, { Component, createRef } from 'react'
import {CloseBtn} from '../../Utils/NavbarButton'
import './ShareModal.css'

const ShareModelSend = [
    {
        imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userName : "infantilelook",
        Name : "Yvonne Taylor"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userName : "attenddecor",
        Name : "Georgia West"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "sparklerlost",
        Name : "Gordon Fleming"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        userName : "translatedictionary",
        Name : "Nora Rivera"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        userName : "knowncelebrate",
        Name : "Misty Craig"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=551&q=80",
        userName : "developingdemocrat",
        Name : "Danny Pratt"
    },
]

export class ShareModal extends Component {

    constructor(props){
        super(props);
        this.ShareModalRef = createRef();
    }

    componentDidMount(){
        this.props.openShare(this.ShareModalRef)
    }


  render() {
    return (
      <>
        <section className='shareModelPopUp' ref={this.ShareModalRef}>
            <div className={this.props.theme?"drak-head shareModel w-100 flex flex-col":"shareModel w-100 flex flex-col"}>
                <header className='sticky top-0 topNavShareModel'>
                    <div className={this.props.theme?"drak-border-bottom shareModelNav flex align-items-center justify-content-between":"shareModelNav flex align-items-center justify-content-between"}>
                        <div className='p-2'><h4>Share</h4></div>
                        <div className='p-2 hover' onClick={() => { this.ShareModalRef.current.style.display = "none" }}><CloseBtn /></div>
                    </div>
                    <div className='shareModelSearch align-items-center flex w-100'>
                        <div className='p-2'><h4>To:</h4></div>
                        <div className='p-2 w-100'><textarea className={this.props.theme?"drak-head p-1 w-100 my-1":"p-1 w-100 my-1"} placeholder='Search...' rows="1"></textarea></div>
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
                                                <div><p className='text-gray'>{val.Name}</p></div>
                                            </div>
                                        </div>
                                        <div className='pr-2'><input type="radio" /></div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className={this.props.theme?"drak-head shareModelFooter w-100 p-2 sticky bottom-0 left-0":"shareModelFooter w-100 p-2 sticky bottom-0 left-0"}>
                    <button className='p-2 w-100 fw-bold hover'>Send</button>
                </div>
            </div>
        </section>
      </>
    )
  }
}

export default ShareModal