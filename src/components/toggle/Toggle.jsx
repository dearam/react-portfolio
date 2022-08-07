import React from 'react'
import "./toggle.css"
import sun from "../../images/sun.png"
import moon from "../../images/moon.png";

const Toggle = () => {
  return (
    <div className='t'>
        <img src={sun} alt="" className='t-icon'/>
        <img src={moon} alt="" className='t-icon'/>
        <div className='t-button'></div>
    </div>
  )
}

export default Toggle