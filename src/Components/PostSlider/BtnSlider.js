import React from 'react'
import './PostSlider.css'
import leftArrow from "./icons/left.svg";
import rightArrow from "./icons/right.svg";

function BtnSlider({ direction, moveSlide }) {
  return (
    <>
    <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
        <img src={direction === "next" ? rightArrow : leftArrow } alt="post"/>
    </button>
    </>
  )
}

export default BtnSlider