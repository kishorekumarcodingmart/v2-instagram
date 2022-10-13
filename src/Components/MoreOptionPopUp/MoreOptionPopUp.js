import React, { useEffect, useRef } from 'react'
import './MoreOptionPopUp.css'

function MoreOptionPopUp({openModel}) {
    const OptionModel = useRef()
    useEffect(()=>{
        openModel(OptionModel)
    },[openModel])
  return (
    <>
        <section className='modelMoreOption' ref={OptionModel}>
            <div className='modelMoreOptionPopup flex flex-col justify-content-center align-items-center text-center fw-bold'>
                <div className='w-100 p-3 text-red bottom-line-model'>Report</div>
                <div className='w-100 p-3 text-red bottom-line-model'>Unfollow</div>
                <div className='w-100 p-3 bottom-line-model'>Add to favourites</div>
                <div className='w-100 p-3 bottom-line-model'>Go to post</div>
                <div className='w-100 p-3 bottom-line-model'>Share to...</div>
                <div className='w-100 p-3 bottom-line-model'>Copy link</div>
                <div className='w-100 p-3 bottom-line-model'>Embed</div>
                <div className='w-100 p-3' onClick={() => { OptionModel.current.style.display = 'none' }}>Cancel</div>
            </div>
        </section>
    </>
  )
}

export default MoreOptionPopUp