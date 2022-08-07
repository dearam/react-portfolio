import React from 'react'
import "./programmingskills.css"

import { MdCode} from "react-icons/md"

const ProgrammingSkills = () => {
  const Progress = ({done}) => {
    const [style, setStyle] = React.useState({});
    
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }
      
      setStyle(newStyle);
    }, 2000);

    return (
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    )
  }
  

  return (
    <div className='ps'>
          <div className='ps-element'>
            <div className="ps-reactangle">
              <p className='ps-title'>ProgrammingSkills</p>
            </div>
            <div className='ps-pro-title'>
              <p >Python</p>
              <p >C</p>
              <p >Java</p>
              <p >Javascript</p>
              <p >Html</p>
              <p >Css</p>
            </div>
            <div className='ps-iconset'>
              <MdCode className='ps-icon'/><br/>
              <MdCode className='ps-icon'/><br/>
              <MdCode className='ps-icon'/><br/>
              <MdCode className='ps-icon'/><br/>
              <MdCode className='ps-icon'/><br/>
              <MdCode className='ps-icon'/>
            </div>
            <div className='ps-progress'>
              <Progress done="81"/><br/>
              <Progress done="60"/><br/>
              <Progress done="70"/><br/>
              <Progress done="71"/><br/>
              <Progress done="100"/><br/>
              <Progress done="78"/>
            </div>
            </div>
            
          </div>
  )
}

export default ProgrammingSkills