import React from 'react'
import "./interests.css"
import { MdBrush,
  MdDesignServices,
  MdOutlineLibraryMusic,
  MdMenuBook,
  MdBookmarkBorder} from "react-icons/md"


const Interests = () => {
  return (
        <div className='In'>
          <div className='i-element'>
        <MdBookmarkBorder className='i-design'/>
        <div className="i-reactangle">
          <p className='in-title'>Interests</p>
          <div className='in-Icons'>
            <MdBrush className='in-school'/><br/>
            <MdDesignServices className='in-color'/><br/>
            <MdOutlineLibraryMusic className='in-source'/><br/>
            <MdMenuBook className='in-time'/>
          </div>
          <div className="in-years">
            <div className="in-y1">Pencil Art</div>
            <div className="in-y1">Craft</div>
            <div className="in-y1">Music listening</div>
            <div className="in-y1">Book Reading</div>
          </div>
          <div className="-i-para">
          <p className="in-d1">Drawing is my hobby.My most of childhood times were spent to Sketching. 
            I won lots of prizes on my school Drawing Competition.
            <br/>First - Eighth STD
          </p>
          <p className="in-d2">
            I love to made some Decorative things for home.And i made some useless things as useful.
            <br/>I decorate my home with full of my crafts
          </p>
          <p className="in-d3">My stressbuster is Music.Sometimes lyrics gave me spirit and
            <br/>sometimes Music provide healing.Music is important in my life
          </p>
          <p className="in-d4">In school and college days I spent my lunch hours in Library.i love reading.
            <br/>I love to read English novels and lecturers.
          </p>
          </div>

          </div>
        </div>
      </div>
  )
}

export default Interests