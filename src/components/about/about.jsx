import React from 'react'
import "./about.css"
import Me2 from "../../images/yeah.jpg"

const about = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img
                    alt="zara"
                    src={Me2}
                    className='a-img'/>
            </div>
        </div>
        <div className='a-right'>
            <div className='a-tile'>
                <h3 className='a-who'>Who I am</h3><div className='a-line'></div>
            </div>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
                <span className='a-highi'>I</span>'m Ram Prasath, a Enginnering student IT department at PSNA. 
                {/* <p className="wavi-contain">
                <div className="waviy">
                    <span sylte={{"--i":1}}>P</span>
                    <span style={{"--i":2}}>S</span>
                    <span style={{"--i":3}}>N</span>
                    <span style={{"--i":4}}>A.</span>
                </div>
                </p>  */}
                {/* <div className='a-para'></div> */}
                    I'm passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, Python, Flutter and UI designer.                
            </p>
            <p className='a-desc'>
                I develop websites with <span className='a-learned'></span>. I have top skills in using design softwares like 
                <br/>Figma, Adobe XD and PhotoShop.I'm also interested in problem & and Machine learning.
                <br/><br/>
                Being a diligent, hardworking and result oriented Boy, I always work towards achieving best result on each project I lay my hands on.
            </p>
        </div>
    </div>
  )
}

export default about