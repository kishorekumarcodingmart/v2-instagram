import React from 'react'
import './DividerSection.css'
import { useSelector } from 'react-redux'


function DividerSection() {
  const theme = useSelector((state)=>state.theme.data.dark)

  return (
    <>
        <div className="m-1 orSection flex flex-row justify-content-center align-items-center">
            <hr className="horizontalLine" />
            <div className={theme?"drak-head mx-3 fw-bold":"mx-3 fw-bold"}>OR</div>
            <hr className="horizontalLine" />
        </div>
    </>
  )
}

export default DividerSection