import React, {  useRef } from 'react'
import './UploadPost.css'
import Input from '../Input/Input'



function UploadPost({ setOpenModal }) {


    const showImg = useRef()

    const preview = (file) => {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);  // Object Blob
        img.alt = file.name;
        document.querySelector('#showImg').append(img);
    }

    const addFiles = (ev) => {
        if (!ev.target.files) return;
        [...ev.target.files].forEach(preview);
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
                        <input type="file" accept="image/*" placeholder="Image URL" className="inputUpload" onChange={addFiles}/>
                    </div>
                    {/* <img src=''  className="imgViwer" alt='showImg' style={{display : "none"}}/> */}
                    <div ref={showImg} id="showImg">

                    </div>
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