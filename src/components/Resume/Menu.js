import React from 'react'
import { Link } from './Ncomponents/RDat'
import "./Resume.css"
import { MdOutlineSchool,
  MdOutlineTimelapse,
  MdIntegrationInstructions,
  MdSource,
  MdColorLens } from "react-icons/md"
import {useState} from 'react';

const Menu = () => {
  const [sidebar,setSidebar] = useState(false);
  const showSidebar = ()=> setSidebar(!sidebar);
  return (
    <>
    <div>
        <h2 className='r-title'>Resume</h2>
        <p className="r-para">My format Bio Details</p>
        <div className="r-line">
        <div className='r-norline'/>
        <div className='r-rectangle'/>
        </div>
        
    </div>
    <nav className='r-navbar'>
        <div className='r-Icons'>
          <MdOutlineSchool className='r-school'/><br/>
          <MdColorLens className='r-color'/><br/>
          <MdIntegrationInstructions className='r-inter'/><br/>
          <MdSource className='r-source'/><br/>
          <MdOutlineTimelapse className='r-time'/>
        </div>
        <div className='r-navcenter'>
                {Link.map((Link)=>{
                    return(
                    <div>
                    <a href={Link.url} key={Link.id} onClick={showSidebar}>
                        {Link.text}
                    </a>&emsp;
                    </div>
                    )
                })}
        </div>
    </nav>
    </>
  )
}

export default Menu