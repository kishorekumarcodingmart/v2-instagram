import React, { useRef } from 'react'
import './UploadPost.css'
import Input from '../Input/Input'



function UploadPost({ setOpenModal }) {

    const inputRef = useRef()
    const imgRef = useRef()

    const showImage = () => {
        let [files] = inputRef.current.files
        if(files){
            imgRef.current.style.display = 'block'
            imgRef.current.src = URL.createObjectURL(files)
        }
    }

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
                        <input type="file" accept="image/*" placeholder="Image URL" className="inputUpload" ref={inputRef} onChange={showImage}/>
                    </div>
                    <img src='' ref={imgRef} className="imgViwer" alt='showImg' style={{display : "none"}}/>
                    <div className="body">
                    {/* <label>Caption :</label> */}
                    <Input type="text" placeholder="Caption" className="inputUpload" />
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