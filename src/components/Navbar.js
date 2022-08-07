import React from 'react'
import {links} from "../Dat"
import "../components/intro/intro.css"

const Navbar = () => {
  return (
    <nav className='n-navbar sticky'>
        <div className='n-navcenter'>
                {links.map((link)=>{
                    return(
                    <div>
                    <a href={link.url} key={link.id}>
                        {link.text}
                    </a>&emsp;
                    </div>
                    )
                })}
        </div>
    </nav>
  )
}

export default Navbar