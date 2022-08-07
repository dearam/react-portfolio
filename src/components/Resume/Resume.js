import * as React from 'react'

import Education from "./Ncomponents/Education"
import Interests from "./Ncomponents/Interests"
import ProgrammingSkills from "./Ncomponents/ProgrammingSkills"
import Rprojects from "./Ncomponents/Rprojects"
import Workhistory from "./Ncomponents/Workhistory"
import Menubar from './Menu';
import "./Resume.css"


const Resume = () => {
  return (
    <div className='r'>
      <div className='r-right'>
        <Menubar/>
      </div>


      <div className='r-left'>
      <div className='r-nav'>
          <section className='r-education' id="Education">
            <Education/>
          </section>
          <section className='r-interests' id="Interests">
            <Interests/>
          </section>
          <section className='r-ps' id="ProgrammingSkills">
            <ProgrammingSkills/>
          </section>
          <section className='r-pro' id="Rprojects">
            <Rprojects/>
          </section>
          <section className='r-wh' id="Workhistory">
            <Workhistory/>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume