import React, { useState } from 'react'
import './ProgressBar.css'

function ProgressBar() {
  const [style, setStyle] = useState({});
  setTimeout(() => {
    const newStyle = {
        opacity: 1,
        width: `100%`
    }
    setStyle(newStyle);
}, 100);

  return (
    <>
        <div className="progress">
			<div className="progress-done" style={style}></div>
		</div>
    </>
  )
}

export default ProgressBar