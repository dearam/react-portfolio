import React from 'react'
import "./intro.css"
import Me from "../../images/pro.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faFacebook,faInstagram,faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";


const intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello!, I am</h2>
          <h1 className="i-name">Ram Prasath</h1>
          <h3 className='i-passion'>PROGRAMMER +  DEVELOPER</h3>
          <p className="i-desc">
              My motivation and love for development as well as good design 
              have brought me to where I am today.
              Every day I try to keep up with latest technology trends.
            </p>
            <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">UI Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Artist</div>
              <div className="i-title-item">Analyist</div>
              <div className="i-title-item">Guitarist</div>
              <div className="i-title-item">Video Editor</div>
            </div>
          </div>
          <div className='profile-options'>
            <a href="Resume.pdf" download="Ramprasath Resume.pdf">
              <button className="btn primary-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="white"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <div className="i-for">
          <div className="i-container">
            <div className="i-ram">RAM PRASATH M V</div>
            <div className="i-job">Student at PSNA</div>
          </div>
          <div className='i-card'>
            <img src={Me} alt="" className="i-img"/>
          </div>
          
          <div className="i-socialicons">
            <a 
              href="https://www.youtube.com/" 
              className='i-afa'>
              <FontAwesomeIcon icon={faYoutube} className="i-you" />
            </a>
            <a 
              href="https://www.facebook.com/" 
              className='i-ayou'>
              <FontAwesomeIcon icon={faFacebook} className="i-fa" />
              </a>
            <a 
              href="https://github.com/dearam" 
              className='i-ainst'>
              <FontAwesomeIcon icon={faGithub} className="i-twi"/>
            </a>
            <a 
              href="https://www.instagram.com/_dearam_3" 
              className='i-ainst'>
              <FontAwesomeIcon icon={faInstagram} className="i-twi"/>
              </a>
            <a 
              href="https://www.linkedin.com/in/dearam" 
              className='i-alink'>
              <FontAwesomeIcon icon={faLinkedin} className="i-link"/>
              </a>
          </div>
          </div>
      </div>
    </div>
  )
}

export default intro