import React from 'react'
import './UploadPost.css'
import Input from '../Input/Input'



function UploadPost({ setOpenModal }) {
  return (
    <>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>Are You Sure You Want to Post?</h1>
                </div>
                <form>
                    <div className="body">
                        {/* <label>Image URL :</label> */}
                        <Input type="url" placeholder="Image URL" className="" />
                    </div>
                    <div className="body">
                    {/* <label>Caption :</label> */}
                    <Input type="text" placeholder="Caption" className="" />
                </div>
                </form>
                <div className="footer">
                    <button onClick={() => { setOpenModal(false) }} id="cancelBtn"> Cancel </button>
                    <button>Post</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default UploadPost