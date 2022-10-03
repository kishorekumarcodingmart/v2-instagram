import React from 'react'
import './DividerSection.css'

function DividerSection() {
  return (
    <>
        <div className="m-1 orSection flex flex-row justify-content-center align-items-center">
            <hr className="horizontalLine" />
            <div className="mx-3 fw-bold">OR</div>
            <hr className="horizontalLine" />
        </div>
    </>
  )
}

export default DividerSection